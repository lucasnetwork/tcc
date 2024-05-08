import { type IUseCase } from '../../useCases/IUseCase'
import { spawn } from 'node:child_process'
import fs from 'fs'
import path from 'path'
import elasticClient from '../../database/elasticSearchClient'
import { RuleRepository } from '../../database/repositories/rule.repository'

class GetLogsToAnalisysController implements IUseCase {
  async handle () {
    const paths = fs.readdirSync(path.resolve(__dirname, '..', '..', '..', 'rules'))
    const responses = paths.map(async (pathName) => {
      const query = await this.getQuery(`/rules/${pathName}`)
      const response = await elasticClient.search({
        query: {

          query_string: {
            _name: 'log',
            query: query.replace('any', '')
          }
        }
      })
      const rule = new RuleRepository()
      try {
        const findRule = await rule.findOne({
          where: {
            rule: pathName.replace('.yml', '')
          }
        })

        return {
          data: response,
          rule: findRule
        }
      } catch {
        const ruleResponse = await rule.create(pathName.replace('.yml', ''))

        return {
          data: response,
          rule: ruleResponse
        }
      }
    })
    const responsePromises = await Promise.all(responses)
    const responseFormated: Array<{
      data: Array<{
        date: string
        program: string
        priority: string
        message: string
        isodate: string
        host: string
        facility: string
      }>
      rule: string
    }> = []
    responsePromises.forEach((response: any, index) => {
      const values = response.data.hits.hits.map((hit: any) => ({
        date: hit._source.date,
        program: hit._source.program,
        priority: hit._source.priority,
        message: hit._source.message,
        isodate: hit._source.isodate,
        host: hit._source.host,
        facility: hit._source.facility,
        id: hit._id,
        rule: response.rule
      }))
      responseFormated.push({
        data: [...values],
        rule: paths[index]
      })
    })
    const data = responseFormated.reduce((prev: any, data: any) => [...prev, ...data.data], []) as any
    const bulk = data.map((query: any) => {
      return {
        delete: {
          _index: 'log',
          _id: query.id
        }
      }
    })
    if (bulk.length === 0) {
      return []
    }
    await elasticClient.bulk({
      body: bulk
    })
    return responseFormated
  }

  private async getQuery (path: string): Promise<string> {
    return await new Promise((resolve) => {
      const response = spawn('sigma', ['convert', '-t', 'lucene', '-p', 'ecs_zeek_beats', path.replace('/', '')])
      response.stdout.on('data', (data: Buffer) => {
        const file = data.toString()
        if (file.includes('Parsing Sigma rules')) {
          return
        }
        resolve(file)
      })
    })
  }
}

export default GetLogsToAnalisysController

import { type Repository } from 'typeorm'
import { type ILogRepository } from '../../implements/logRepository'
import { AppSource } from '..'
import { LogEntity } from '../entities/log.entity'
import { type ILog } from '../../implements/log'
import yaml2 from 'js-yaml'
import fs from 'fs'
import path from 'path'

export class LogRepository implements ILogRepository {
  private readonly logs: Repository<LogEntity>
  constructor () {
    this.logs = AppSource.getRepository(LogEntity)
  }

  async create (feature: ILog): Promise<ILog> {
    const newFeature = this.logs.create(feature)
    await this.logs.save(newFeature)
    return newFeature
  }

  async all (): Promise<ILog[]> {
    console.log('oiooi', this.logs)
    const features = await this.logs.find()
    console.log(features)
    return features
  }

  async createMany (log: ILog[]): Promise<void> {
    const newFeature = log.map(log => this.logs.create(log))
    await this.logs.save(newFeature)
  }

  async findOne (id: string): Promise<ILog> {
    const feature = await this.logs.findOne({
      where: {
        id
      },
      relations: ['rule']
    })
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (feature?.rule) {
      const rule = yaml2.load(fs.readFileSync(path.resolve(__dirname, '..', '..', '..', 'rules', `${feature.rule.rule}.yml`)))
      feature.rule = rule
    }
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!feature) {
      throw new Error('Log not found')
    }
    return feature
  }
}

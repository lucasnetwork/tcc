import { type FindOneOptions, type Repository } from 'typeorm'
import { type IRuleRepository } from '../../implements/ruleRepository'
import { AppSource } from '..'
import { type ILog } from '../../implements/log'
import { RuleEntitie } from '../entities/rule.entity'

export class RuleRepository implements IRuleRepository {
  private readonly rules: Repository<RuleEntitie>
  constructor () {
    this.rules = AppSource.getRepository(RuleEntitie)
  }

  async create (name: string): Promise<RuleEntitie> {
    const newFeature = this.rules.create({
      rule: name
    })
    await this.rules.save(newFeature)
    return newFeature
  }

  async all (): Promise<RuleEntitie[]> {
    const features = await this.rules.find()
    return features
  }

  async createMany (log: ILog[]): Promise<void> {
    const newFeature = log.map(log => this.rules.create(log))
    await this.rules.save(newFeature)
  }

  async findOne (data: FindOneOptions<RuleEntitie>): Promise<RuleEntitie> {
    const feature = await this.rules.findOne(data)
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!feature) {
      throw new Error('Log not found')
    }
    return feature
  }
}

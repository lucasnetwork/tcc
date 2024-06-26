import { type RuleEntitie } from '../database/entities/rule.entity'
import { type ILog } from './log'
import { type FindOneOptions } from 'typeorm'

export interface IRuleRepository {
  create: (name: string) => Promise<RuleEntitie>
  all: () => Promise<RuleEntitie[]>
  createMany: (log: ILog[]) => Promise<void>
  findOne: (data: FindOneOptions<RuleEntitie>) => Promise<RuleEntitie>
}

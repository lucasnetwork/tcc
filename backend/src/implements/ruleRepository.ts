import { type RuleEntitie } from 'src/database/entities/rule.entity'
import { type ILog } from './log'
import { type FindOneOptions } from 'typeorm'

export interface IRuleRepository {
  create: (log: ILog) => Promise<RuleEntitie>
  all: () => Promise<RuleEntitie[]>
  createMany: (log: ILog[]) => Promise<void>
  findOne: (data: FindOneOptions<RuleEntitie>) => Promise<RuleEntitie>
}

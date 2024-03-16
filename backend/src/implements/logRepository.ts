import { type ILog } from './log'

export interface ILogRepository {
  create: (log: ILog) => Promise<ILog>
  all: () => Promise<ILog[]>
  createMany: (log: ILog[]) => Promise<void>
  findOne: (id: string) => Promise<ILog>
}

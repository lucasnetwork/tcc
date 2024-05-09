import { type RuleEntitie } from 'src/database/entities/rule.entity'
import { type ILogRepository } from '../../implements/logRepository'

class CreateLogAlertController {
  constructor (private readonly logRepository: ILogRepository) {}
  async handle (rest: Array<{
    date: string
    program: string
    priority: string
    message: string
    isodate: string
    host: string
    facility: string
    rule: RuleEntitie | string
  }>) {
    const body = rest.map(({ ...rest }) => rest)
    await this.logRepository.createMany(body)
  }
}

export default CreateLogAlertController

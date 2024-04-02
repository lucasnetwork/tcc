import { type RuleEntitie } from 'src/database/entities/rule.entity'
import { type ILogRepository } from '../../implements/logRepository'
import { type IUseCase } from '../../useCases/IUseCase'

class CreateLogAlertController implements IUseCase {
  constructor (private readonly logRepository: ILogRepository) {}
  async handle (rest: Array<{
    date: string
    program: string
    priority: string
    message: string
    isodate: string
    host: string
    facility: string
    id: string
    rule: RuleEntitie
  }>) {
    const body = rest.map(({ id, ...rest }) => rest)
    await this.logRepository.createMany(body)
  }
}

export default CreateLogAlertController

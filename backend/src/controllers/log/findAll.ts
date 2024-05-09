import { type ILogRepository } from '../../implements/logRepository'
import { type IUseCase } from '../../useCases/IUseCase'
// import Log from '../models/log.schema'
class AllLogController implements IUseCase {
  constructor (private readonly logRepository: ILogRepository) {}
  async handle () {
    const logs = await this.logRepository.all()
    return logs
  }
}

export default AllLogController

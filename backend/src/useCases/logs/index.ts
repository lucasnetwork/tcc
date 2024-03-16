import GetLogsToAnalisysController from '../../controllers/log/getLogsToAnalisys'
import CreateLogController from '../../controllers/log/create'
import AllLogController from '../../controllers/log/findAll'
import { LogRepository } from '../../database/repositories/log.repository'
import CreateLogAlertController from '../../controllers/log/createLogsAlert'
import FindOneLogController from '../../controllers/log/findOneLog'

export const createLogUseCase = () => {
  const logRepository = new LogRepository()
  const logController = new CreateLogController(logRepository)
  return logController
}

export const createLogAlertUseCase = () => {
  const logRepository = new LogRepository()
  const logController = new CreateLogAlertController(logRepository)
  return logController
}

export const findAllLogsUseCase = () => {
  const logRepository = new LogRepository()
  const logController = new AllLogController(logRepository)
  return logController
}

export const findOneLogsUseCase = () => {
  const logRepository = new LogRepository()
  const logController = new FindOneLogController(logRepository)
  return logController
}

export const getLogsToAnalisys = () => {
  const logsToAnalisysController = new GetLogsToAnalisysController()
  return logsToAnalisysController
}

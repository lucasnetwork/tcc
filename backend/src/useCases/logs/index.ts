import CreateLogController from "../../controllers/log/create"
import AllLogController from "../../controllers/log/findAll"
import { LogRepository } from "../../database/repositories/log.repository"

export const createLogUseCase = () =>{
    const logRepository = new LogRepository()
    const logController = new CreateLogController(logRepository)
    return logController
}

export const findAllLogsUseCase =()=>{
    const logRepository = new LogRepository()
    const logController = new AllLogController(logRepository)
    return logController
}
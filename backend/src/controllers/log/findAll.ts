import {Request,Response} from 'express'
import { ILogRepository } from '../../implements/logRepository'
import { IUseCase } from '../../useCases/IUseCase'
// import Log from '../models/log.schema'
class AllLogController implements IUseCase{
    constructor(private logRepository:ILogRepository){}
    async handle(req:Request,res:Response){
        const logs =await this.logRepository.all()
        return res.status(200).json(logs)
    }
}

export default AllLogController
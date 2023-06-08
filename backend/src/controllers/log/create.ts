import {Request,Response} from 'express'
import { ILogRepository } from 'src/implements/logRepository'
import { IUseCase } from 'src/useCases/IUseCase'
// import Log from '../models/log.schema'
class CreateLogController implements IUseCase{
    constructor(private logRepository:ILogRepository){}
    async handle(req:Request,res:Response){
        try{
            console.log(req.body)
            const response =await this.logRepository.create({
                date:req.body.DATE,
                program:req.body.PROGRAM,
                priority:req.body.PRIORITY,
                message:req.body.MESSAGE || "",
                isodate:req.body.ISODATE,
                host:req.body.HOST,
                facility:req.body.FACILITY,
            })
            console.log(response)
            res.status(201).json(response)
    
        }catch(e){
            console.log("oio")
            console.log(e)
            res.status(200)
        }
    }

}

export default CreateLogController

import {Request,Response} from 'express'
import elasticClient from '../../database/elasticSearchClient'
import { ILogRepository } from '../../implements/logRepository'
import { IUseCase } from '../../useCases/IUseCase'

class CreateLogController implements IUseCase{
    constructor(private logRepository:ILogRepository){}
    async handle(req:Request,res:Response){
        try{
            console.log("req.body.",req.body)
            await elasticClient.index({
                index:"log",
                body:{
                date:req.body.DATE,
                program:req.body.PROGRAM,
                priority:req.body.PRIORITY,
                message:req.body.MESSAGE || "",
                isodate:req.body.ISODATE,
                host:req.body.HOST,
                facility:req.body.FACILITY,
                }
            })
            res.status(201).json({})
    
        }catch(e){
            res.status(200)
        }
    }

}

export default CreateLogController
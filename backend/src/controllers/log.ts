import {Request,Response} from 'express'
import { LogRepository } from 'src/database/repositories/log.repository'
// import Log from '../models/log.schema'
class LogController{
    constructor(private logRepository:LogRepository){}
    async create(req:Request,res:Response){
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

    async all(req:Request,res:Response){

        // const logs = await Log.find()
        // console.log(logs)

        return res.status(200).json([])
    }
}

export default LogController
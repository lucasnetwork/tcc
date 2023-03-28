import {Request,Response} from 'express'
import Log from '../models/log.schema'
class LogController{
    async create(req:Request,res:Response){
        try{
            const log = new Log({ 
                date:req.body.DATE,
                program:req.body.PROGRAM,
                priority:req.body.PRIORITY,
                message:req.body.MESSAGE,
                isodate:req.body.ISODATE,
                host:req.body.HOST,
                facility:req.body.FACILITY,
             });
            await log.save();
            res.status(201).json({msg:"created"})
    
        }catch{
            console.log("oio")
            res.status(500)
        }
    }
}

export default LogController
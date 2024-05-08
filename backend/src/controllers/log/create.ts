import { type Request, type Response } from 'express'
import elasticClient from '../../database/elasticSearchClient'
import { type IUseCase } from '../../useCases/IUseCase'
import { ILogRepository } from 'src/implements/logRepository'

class CreateLogController implements IUseCase {
   constructor (private readonly logRepository: ILogRepository) {}
 
  async handle (req: Request, res: Response) {
    try {
      const body ={
        date:req.body.DATE,
        program:req.body.PROGRAM|| "",
        priority:req.body.PRIORITY,
        message:req.body.MESSAGE || "",
        isodate:req.body.ISODATE,
        host:req.body.HOST,
        facility:req.body.FACILITY,
        }
        console.log("log")
        // await this.logRepository.create({
        //   date:req.body.DATE,
        //   program:req.body.PROGRAM|| "",
        //   priority:req.body.PRIORITY,
        //   message:req.body.MESSAGE || "",
        //   isodate:req.body.ISODATE,
        //   host:req.body.HOST,
        //   facility:req.body.FACILITY,
        // })
      await elasticClient.index({
          index:"log",
          body
      })
      res.status(201).json({})
    } catch (e) {
      console.log(e)
      res.status(200)
    }
  }
}

export default CreateLogController

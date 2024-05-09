import { type Request, type Response } from 'express'
import { type IUseCase } from '../../useCases/IUseCase'
import { ILogRepository } from 'src/implements/logRepository'

class CreateLogController implements IUseCase {
   constructor (private readonly logRepository: ILogRepository) {}
 
  async handle (req: Request, res: Response) {
    try {
      console.log("oi")
      await this.logRepository.create({
        date:req.body.DATE,
        program:req.body.PROGRAM|| "",
        priority:req.body.PRIORITY,
        message:req.body.MESSAGE || "",
        isodate:req.body.ISODATE,
        host:req.body.HOST,
        facility:req.body.FACILITY,
      })
      res.status(201).json({})
    } catch (e) {
      res.status(200)
    }
  }
}

export default CreateLogController

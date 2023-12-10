
import { ILogRepository } from '../../implements/logRepository'
import { IUseCase } from '../../useCases/IUseCase'

class CreateLogAlertController implements IUseCase{
    constructor(private logRepository:ILogRepository){}
    async handle(body:{
        date:string
        program:string
        priority:string
        message:string
        isodate:string
        host:string
        facility:string
    }[]){
       await this.logRepository.createMany(body)

         return {}
    
    }

}

export default CreateLogAlertController
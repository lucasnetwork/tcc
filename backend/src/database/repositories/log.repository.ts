
import { Repository } from "typeorm";
import { ILogRepository } from "src/implements/logRepository";
import { AppSource } from "..";
import { LogEntity } from "../entities/log.entity";
import { ILog } from "src/implements/log";

export class LogRepository implements ILogRepository {
    private logs: Repository<LogEntity>;
    
    constructor(){
        this.logs = AppSource.getRepository(LogEntity);
    }

    async create(feature: ILog): Promise<ILog> {
       const newFeature =  this.logs.create(feature);
       await this.logs.save(newFeature);
       return newFeature;
    }
    async all(): Promise<ILog[]> {
        const features = this.logs.find()
        return features
    }
}
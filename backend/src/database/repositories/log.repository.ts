
import { Repository } from "typeorm";
import { ILogRepository } from "../../implements/logRepository";
import { AppSource } from "..";
import { LogEntity } from "../entities/log.entity";
import { ILog } from "../../implements/log";

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
        const features = await this.logs.find()
        return features
    }
    async createMany(log: ILog[]): Promise<void> {
       const newFeature = log.map(log=>this.logs.create(log))
       await this.logs.save(newFeature) 
       return
    }
}
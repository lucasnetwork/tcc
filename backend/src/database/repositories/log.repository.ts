
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
        console.log("newFeature2",feature)
       const newFeature =  this.logs.create(feature);
       console.log("newFeature",newFeature)
       await this.logs.save(newFeature);
       return newFeature;
    }
    // async update(feature: Feature): Promise<Feature> {
    //     return await this.features.save(feature);
    // }
    // async delete(feature: Feature): Promise<Feature> {
    //     return await this.features.remove(feature);
    // }
}
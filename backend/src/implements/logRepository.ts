import { ILog } from "./log";

export interface ILogRepository {
    create(log:ILog): Promise<ILog>
}
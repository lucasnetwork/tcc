import express,{Express} from "express";
import router from "./routes";
import cors from 'cors'
import dotenv from 'dotenv'
import { InitializeConnection } from "./database";
import { CronJob } from "cron";
import { createLogAlertUseCase, getLogsToAnalisys } from "./useCases/logs";

dotenv.config()
class App{
    app:Express
    constructor(){
        InitializeConnection()
        this.app = express()
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(router)
        const handle = getLogsToAnalisys()
        const handleCreateAlert = createLogAlertUseCase()
        // handle.handle().then(async(response) =>{
        //    console.log("response",response)
        //    await handleCreateAlert.handle(response)
        // }).catch(e=>{
        //     console.log(e)
        // })
        var job = new CronJob(
            '10 * * * * *',
            async function() {
                const response = await handle.handle()
                await handleCreateAlert.handle(response)
            },
            null,
            true,
            'America/Los_Angeles'
        );
        job.start()
    }
}

export default App

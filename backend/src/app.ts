import express, { type Express } from 'express'
import router from './routes'
import cors from 'cors'
import dotenv from 'dotenv'
import { InitializeConnection } from './database'
import { CronJob } from 'cron'
import { createLogAlertUseCase, getLogsToAnalisys } from './useCases/logs'

dotenv.config()
class App {
  app: Express
  constructor () {
    void InitializeConnection()
    this.app = express()
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(router)
    const handle = getLogsToAnalisys()
    const handleCreateAlert = createLogAlertUseCase()

    const job = new CronJob(
      '1 * * * * *',
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      async (): Promise<void> => {
        const response = await handle.handle()
        await handleCreateAlert.handle(response.reduce((prev, data) => [...prev, ...data.data], []))
      },
      null,
      true,
      'America/Los_Angeles'
    )
    job.start()
  }
}

export default App

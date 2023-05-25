import express,{Express} from "express";
import router from "./routes";
import cors from 'cors'
import dotenv from 'dotenv'
import { InitializeConnection } from "./database";

dotenv.config()
class App{
    app:Express
    constructor(){
        InitializeConnection()
        this.app = express()
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(router)
    }
}

export default App
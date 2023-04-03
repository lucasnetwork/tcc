import mongoose from "mongoose";
import express,{Express} from "express";
import router from "./routes";
import cors from 'cors'
import dotenv from 'dotenv'
mongoose.connect('mongodb://root:example@10.0.0.115:3000').then(()=>{
    console.log("oi")
})
dotenv.config()
class App{
    app:Express
    constructor(){
        this.app = express()
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(router)
    }
}

export default App
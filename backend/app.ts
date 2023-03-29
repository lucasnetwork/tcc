import mongoose from "mongoose";
import express,{Express} from "express";
import router from "./routes";
mongoose.connect('mongodb://root:example@10.0.0.115:3000').then(()=>{
})

class App{
    app:Express
    constructor(){
        this.app = express()
        this.app.use(router)
    }
}

export default App
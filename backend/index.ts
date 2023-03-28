import mongoose from "mongoose";
import express from "express";
import LogController from "./controllers/log";
mongoose.connect('mongodb://root:example@10.0.0.115:3000').then(()=>{
    console.log("connect")
}).catch((e)=>{
console.log("mongodb://root:example@10.0.0.115:3000")
console.log(e)
});
const logController = new LogController()

const app = express()
app.use(express.json())
const router = express.Router()
router.post("/",logController.create)


app.use(router)

app.listen(3333,()=>{
    console.log("backend online")
})
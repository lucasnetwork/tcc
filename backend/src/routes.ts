import {Router} from "express";
import LogController from "./controllers/log";
import { LogRepository } from "./database/repositories/log.repository";


const route = Router()
route.post("/",async(req,res)=>{
    console.log('oi2')
    const logRepository = new LogRepository()
    const logController = new LogController(logRepository)
   const response =await logController.create(req,res)
   return response
})
// route.get("/logs",logController.all)

export default route
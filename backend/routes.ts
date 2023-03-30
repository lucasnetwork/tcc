import {Router} from "express";
import LogController from "./controllers/log";

const logController = new LogController()

const route = Router()
route.post("/",logController.create)
route.get("/",logController.all)

export default route
import express from "express";
import LogController from "./controllers/log";

const logController = new LogController()

const router = express.Router()
router.post("/",logController.create)
router.get("/",logController.all)

export default router
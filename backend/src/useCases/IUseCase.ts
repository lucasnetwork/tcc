import { Request, Response } from "express";

export interface IUseCase{
    handle:(req:Request,res:Response)=>unknown
}
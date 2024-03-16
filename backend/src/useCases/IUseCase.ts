import { type Request, type Response } from 'express'

export interface IUseCase {
  handle: (req: Request, res: Response) => any
}

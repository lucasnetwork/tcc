/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { createLogUseCase, findAllLogsUseCase, findOneLogsUseCase } from './useCases/logs'

const route = Router()
route.post('/', async (req, res) => {
  void createLogUseCase().handle(req, res)
})

route.get('/logs/:id', async (req, res) => {
  const response = await findOneLogsUseCase().handle(req, res)
  return res.status(200).json(response)
})
// eslint-disable-next-line @typescript-eslint/no-misused-promises
route.get('/logs', async (req, res) => {
  const response = await findAllLogsUseCase().handle(req, res)
  return res.status(200).json(response)
})

export default route

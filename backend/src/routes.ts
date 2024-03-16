import { Router } from 'express'
import { createLogUseCase, findAllLogsUseCase } from './useCases/logs'

const route = Router()
route.post('/', async (req, res) => {
  createLogUseCase().handle(req, res)
})
// eslint-disable-next-line @typescript-eslint/no-misused-promises
route.get('/logs', async (req, res) => {
  const response = await findAllLogsUseCase().handle(req, res)
  return res.status(200).json(response)
})

export default route

import { Router } from 'express'
import { createLogUseCase, findAllLogsUseCase } from './useCases/logs'

const route = Router()
route.post('/', async (req, res) => {
  createLogUseCase().handle(req, res)
})
route.get('/logs', async (req, res) => {
  findAllLogsUseCase().handle(req, res)
})

export default route

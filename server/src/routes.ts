import { Router, Request, Response } from 'express'
import ClassesController from '@controllers/ClassesController'
import ConnectionsController from '@controllers/ConnectionsController'

const routes = Router()

const classesController = new ClassesController()
const connectionsController = new ConnectionsController()

routes.get('/classes', classesController.index)
routes.post('/classes', classesController.create)

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

export default routes

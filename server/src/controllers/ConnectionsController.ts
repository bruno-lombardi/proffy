import { Request, Response } from 'express'
import db from '@database/connection'

export default class ConnectionsController {
  public async create (request: Request, response: Response) {
    const {
      user_id
    } = request.body

    await db('connections').insert({
      user_id
    })

    return response.status(201).json()
  }

  public async index (request: Request, response: Response) {
    const [connections] = await db('connections').count('* as total')
    const { total } = connections
    return response.json({ total })
  }
}

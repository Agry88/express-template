import { Express, Router } from 'express'
import { Ctx } from './../types/context'
import authRouter from './auth.route'

export default (ctx: Ctx, app: Express): Router => {
  const router = Router()

  // Map Routes
  router.use(
    '/auth',
    authRouter(ctx)
    // #swagger.tags = ['auth']
  )

  return router
}

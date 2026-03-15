import { ArkstackRouteListOptions } from '@arkstack/contract'
import { Router as ClearRouter } from 'clear-router/express'
import { RequestError } from './utils/errors'
import { existsSync } from 'node:fs'
import express from 'express'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

export class Router extends ClearRouter {
  static async bind () {
    const router = express.Router()

    const apiRoutes = join(process.cwd(), 'src/routes/api.ts')
    const webRoutes = join(process.cwd(), 'src/routes/web.ts')

    if (existsSync(apiRoutes)) {
      await ClearRouter.group('/api', async () => {
        await import(pathToFileURL(apiRoutes).href)
      })
    }

    if (existsSync(webRoutes)) {
      await ClearRouter.group('/', async () => {
        await import(pathToFileURL(webRoutes).href)
      })
    }

    // Apply the registered routes to the Express application
    ClearRouter.apply(router)

    // Handle unmatched routes
    router.all('/*splat', (req, _res, next) => {
      const url = req.originalUrl || req.url
      next(new RequestError(`Cannot find any route matching [${req.method}] ${url}`, 404))
    })

    return router
  }

  static async list (_options: ArkstackRouteListOptions = {}) {
    await this.bind()

    return this.allRoutes()
  }
}

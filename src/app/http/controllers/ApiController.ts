import {
    apiEndpoints,
    createHealthPayload,
    createVersionPayload,
    serviceInfo,
} from 'src/core/service-info'

import { BaseController } from '@controllers/BaseController'
import { HttpContext } from 'clear-router/types/express'
import { Router } from 'src/core/router'

/**
 * ApiController
 */
export default class ApiController extends BaseController {
    index = async ({ res }: HttpContext) => {
        return res.json({
            ...serviceInfo,
            endpoints: Router.allRoutes()
                .reverse()
                .map(e => `${e.methods.join('|').toUpperCase()}: ${e.path}`)
                .filter((route) => apiEndpoints.some((endpoint) => route.endsWith(endpoint))),
        })
    }

    health = async ({ res }: HttpContext) => {
        return res.json(createHealthPayload())
    }

    version = async ({ res }: HttpContext) => {
        return res.json(createVersionPayload())
    }
}

import { BaseController } from '@controllers/BaseController'
import { HttpContext } from 'clear-router/types/express'

/**
 * HomeController
 */
export default class HomeController extends BaseController {
    index = async ({ res }: HttpContext) => {
        res.setHeader('Content-Type', 'text/html')
            .send('Tride API is running.')
    }
}

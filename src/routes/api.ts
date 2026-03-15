import ApiController from 'src/app/http/controllers/ApiController'
import { Router } from 'src/core/router'

Router.get('/', [ApiController, 'index'])

Router.get('/health', [ApiController, 'health'])

Router.get('/version', [ApiController, 'version'])
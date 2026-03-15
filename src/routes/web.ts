import HomeController from 'src/app/http/controllers/HomeController'
import { Router } from 'src/core/router'

Router.get('/', [HomeController, 'index'])

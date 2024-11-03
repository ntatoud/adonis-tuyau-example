/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const HelloController = () => import('#controllers/hello_controller')
router.get('/', [HelloController]).as('hello')

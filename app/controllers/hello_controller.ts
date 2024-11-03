import type { HttpContext } from '@adonisjs/core/http'
import { helloValidator } from '#validators/hello_validator'

export default class HelloController {
  async handle({ request }: HttpContext) {
    const { name } = await request.validateUsing(helloValidator)
    return {
      message: `Hello ${name}`,
    }
  }
}

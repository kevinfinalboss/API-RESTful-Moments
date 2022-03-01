import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MomentsController {
  public async store() {
    return {
      msg: 'A operação foi concluída',
    }
  }
}

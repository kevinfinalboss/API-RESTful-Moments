import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Moment from 'App/Models/Moment'
import Application from '@ioc:Adonis/Core/Application'
import { v4 as uuidv4 } from 'uuid'
export default class MomentsController {
  private validationOptions = {
    type: ['image'],
    size: '5mb',
  }
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const image = request.file('image', this.validationOptions)
    if (image) {
      const imageName = `${uuidv4()}.${image.extname}`
      await image.move(Application.tmpPath('uploads'), {
        name: imageName,
      })
      body.image = imageName
    }

    const moment = await Moment.create(body)
    response.status(201)
    return {
      message: 'Momento criado com sucesso!',
      data: moment,
    }
  }
  public async index() {
    const moments = await Moment.all()

    return {
      data: moments,
    }
  }

  public async show({ params }: HttpContextContract) {
    const moment = await Moment.findOrFail(params.id)

    return {
      data: moment,
    }
  }
  public async destroy({ params }: HttpContextContract) {
    const moment = await Moment.findOrFail(params.id)
    await moment.delete()

    return {
      data: moment,
      message: 'Exclusão de momento efetuado com sucesso!',
    }
  }

  public async update({ params, request }: HttpContextContract) {
    const body = request.body()
    const moment = await Moment.findOrFail(params.id)
    moment.title = body.title
    // eslint-disable-next-line no-self-assign
    moment.description = body.description

    // eslint-disable-next-line eqeqeq
    if (moment.image != body.image || !moment.image) {
      const image = request.file('image', this.validationOptions)
      if (image) {
        const imageName = `${uuidv4()}.${image.extname}`

        await image.move(Application.tmpPath('uploads'), {
          name: imageName,
        })
        moment.image = imageName
      }
    }
    await moment.save()

    return {
      message: 'Momento atualizado com sucesso',
      data: moment,
    }
  }
}

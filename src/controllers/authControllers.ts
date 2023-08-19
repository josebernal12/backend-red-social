import { Request, Response } from 'express'

import UserServices from '../services/userServices'
class AuthController {


  static async register(req: Request, res: Response) {
    const user = await UserServices.register(req.body)
    res.json({
      error: user.error,
      message: user.message,
      user: user.user,
      status: user.status
    })
  }
  static async login(req: Request, res: Response) {
    const { email, password }: { email: string, password: string } = req.body
    const user = await UserServices.login(email, password)
    res.json({
      error: user.error,
      message: user.message,
      user: user.user,
      token: user.token,
      status: user.status
    })
  }

}
export default AuthController
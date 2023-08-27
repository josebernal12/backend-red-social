import { Request, Response } from 'express'
import { JwtPayload } from 'jsonwebtoken'
interface RequestExt extends Request {
  user?: string | JwtPayload
}
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
  static profile(req: RequestExt, res: Response) {
    const user = req.user
    res.json({
      error: false,
      message: 'user obtained',
      user,
      status: 200
    })
  }

}
export default AuthController
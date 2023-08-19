import generateToken from "../helpers/generateToken";
import IResponse, { IUser } from "../interfaces/response";
import UserModel from '../models/userModel'

class UserServices {
  static async register(userBD: IUser): Promise<IResponse> {
    try {
      const newUser = await UserModel.create(
        {
          name: userBD.name,
          email: userBD.email,
          password: userBD.password,
          phone: userBD.phone
        })
      const userWithIdAsString = { ...newUser.toObject(), _id: newUser._id.toString() };

      return {
        error: false,
        message: 'user created',
        user: userWithIdAsString,
        status: 200
      };
    } catch (error) {
      console.error('Error:', error); // Imprimir el mensaje de error real
      return {
        error: true,
        message: JSON.stringify(error), // Usar el mensaje de error real
        status: 500
      };
    }
  }

  static async login(email: string, password: string): Promise<IResponse> {

    try {
      const user = await UserModel.findOne<IUser>({ email })
      if (!user) {
        return {
          error: true,
          message: 'user doesnt not exist',
          status: 404
        }
      }
      if (user.password && user._id) {
        if (await UserModel.validPassword(user.password, password)) {
          user.token = generateToken(user._id)
          console.log(user.token)
          return {
            error: false,
            message: 'login succesfully',
            user: user,
            token: user.token,
            status: 200
          }
        }

      }
      return {
        error: true,
        message: 'error password doest coincied',
        status: 400
      }
    } catch (error) {
      return {
        error: true,
        message: JSON.stringify(error),
        status: 500
      }
    }
  }
}
export default UserServices;

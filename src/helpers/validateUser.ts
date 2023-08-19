import UserModel from '../models/userModel'
export const searchEmail = async (email: string) => {

  const isTrue = await UserModel.findOne({ email })
  if (isTrue) {
    throw new Error('email doesnt exist')
  }

}
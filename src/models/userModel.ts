import { prop, getModelForClass, pre, DocumentType } from '@typegoose/typegoose'
import bcrypt from 'bcrypt'
@pre<User>('save', async function () {
  this.password = await bcrypt.hash(this.password, 10)
})

export class User {
  @prop()
  name: string;

  @prop()
  email: string;

  @prop()
  phone: string;

  @prop()
  password: string;

  static async validPassword(passwordBD: string, password: string) {
    return await bcrypt.compare(password, passwordBD)

  }

}

const UserModel = getModelForClass(User)

export default UserModel
import { prop, Ref, getModelForClass } from '@typegoose/typegoose'
import { Post } from './post'
import { User } from './userModel'

export class Likes {

  @prop({ default: Date.now() })
  date: Date

  @prop({ ref: () => Post })
  post: Ref<Post>

  @prop({ ref: () => User })
  user: Ref<User>
}

const likesModel = getModelForClass(Likes)

export default likesModel
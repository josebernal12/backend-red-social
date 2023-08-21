import { getModelForClass, prop, Ref } from '@typegoose/typegoose'
import { User } from './userModel'
import { Post } from './post'
import { Likes } from './likes'

export class Comments {

  @prop()
  message: string

  @prop({ ref: () => User })
  user: Ref<User>

  @prop({ ref: () => Post })
  post: Ref<Post>

  @prop({ ref: () => Likes })
  likes: Ref<Likes>
}

const commentsModel = getModelForClass(Comments)

export default commentsModel

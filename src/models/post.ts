import { prop, getModelForClass, Ref } from '@typegoose/typegoose'
import { Likes } from './likes';
import { Comments } from './comments';

export class Post {
  @prop()
  description: string;
  @prop({ default: Date.now() })
  date: Date;
  @prop()
  image: string;
  @prop({ ref: () => Comments })
  comments: Ref<Comments[]>
  @prop({ ref: () => Likes })
  likes: Ref<Likes>


}

const postModel = getModelForClass(Post)

export default postModel
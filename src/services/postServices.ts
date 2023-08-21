import IResponse, { IPost } from "../interfaces/response";
import postModel from "../models/post";

class PostServices {


  static async getPosts(): Promise<IResponse> {
    try {
      const post: IPost[] = await postModel.find()
      if (!post) {
        return {
          error: true,
          message: 'post doesnt exit',
          status: 404
        }
      }
      return {
        error: false,
        message: 'post obtained',
        posts: post,
        status: 200
      }
    } catch (error) {
      return {
        error: true,
        message: JSON.stringify(error),
        status: 500
      }
    }

  }
  static async createPost({ description, date, image }: IPost): Promise<IResponse> {
    try {
      const post = await postModel.create({ description, date, image })
      if (!post) {
        return {
          error: true,
          message: 'post doesnt exit',
          status: 404
        }
      }
      return {
        error: false,
        message: 'post created',
        post: post,
        status: 201
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

export default PostServices
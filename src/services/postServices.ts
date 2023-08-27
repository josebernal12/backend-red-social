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
  static async createPost({ message, date, image }: IPost): Promise<IResponse> {
    try {
      const post = await postModel.create({ message, date, image })
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

 static async updatePost(id: string, post: IPost): Promise<IResponse> {
    try {
      const response = await postModel.findByIdAndUpdate(id, post, { new: true })
      if (!response) {
        return {
          error: true,
          message: 'response doesnt exit',
          status: 404
        }
      }
      return {
        error: false,
        message: 'post update',
        post: response,
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
 static async deletePost(id: string): Promise<IResponse> {
    try {
      const response = await postModel.findByIdAndDelete(id, { new: true })
      if (!response) {
        return {
          error: true,
          message: 'post doesnt exit',
          status: 404
        }
      }
      return {
        error: false,
        message: 'post update',
        post: response,
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
}

export default PostServices
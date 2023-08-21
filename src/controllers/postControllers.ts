import { IPost } from "../interfaces/response";
import PostServices from "../services/postServices";
import { Request, Response } from 'express'
class PostController {

  static async getPosts(req: Request, res: Response) {
    const response = await PostServices.getPosts()
    res.json({
      error: response.error,
      message: response.message,
      post: response.posts,
      status: response.status
    })
  }
  static async createPost(req: Request, res: Response) {
    const response = await PostServices.createPost(req.body)

    res.json({
      error: response.error,
      message: response.message,
      post: response.post,
      status: response.status
    })
  }
}

export default PostController
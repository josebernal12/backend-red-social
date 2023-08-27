import { IPost } from "../interfaces/response";
import PostServices from "../services/postServices";
import { Request, Response } from 'express'
class PostController {

  static async getPosts(req: Request, res: Response) {
    const response = await PostServices.getPosts()
    res.json({
      error: response.error,
      message: response.message,
      posts: response.posts,
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
  static async updatePost(req: Request, res: Response) {
    const { id } = req.params
    const response = await PostServices.updatePost(id, req.body)
    res.json({
      error: response.error,
      message: response.message,
      post: response.post,
      status: response.status
    })
  }
  static async deletePost(req: Request, res: Response) {
    const { id } = req.params
    const response = await PostServices.deletePost(id)

    res.json({
      error: response.error,
      message: response.message,
      post: response.post,
      status: response.status
    })

  }

}

export default PostController
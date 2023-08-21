import { Router } from 'express'
import checkAuth from '../middlewares/checkAuth'
import PostController from '../controllers/postControllers'

const router = Router()

router.route('/')
  .get(checkAuth, PostController.getPosts)
  .post(checkAuth, PostController.createPost)

export default router 
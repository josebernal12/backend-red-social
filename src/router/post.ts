import { Router } from 'express'
import checkAuth from '../middlewares/checkAuth'
import PostController from '../controllers/postControllers'

const router = Router()

router.route('/')
  .get(checkAuth, PostController.getPosts)
  .post(checkAuth, PostController.createPost);

router.route('/:id')
  .put(checkAuth, PostController.updatePost)
  .delete(checkAuth, PostController.deletePost)
export default router 
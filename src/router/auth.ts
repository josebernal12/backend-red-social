import { Router } from 'express'
import { check } from 'express-validator'
import validateField from '../middlewares/validationResult'
import { searchEmail } from '../helpers/validateUser'
import AuthController from '../controllers/authControllers'
import checkAuth from '../middlewares/checkAuth'
const router = Router()

router.post('/register', [
  check('name', 'name is required').not().isEmpty(),
  check('email', 'email is required').not().isEmpty().isEmail(),
  check('password', 'password is required').not().isEmpty(),
  check('email').custom(searchEmail),
  validateField,
], AuthController.register)

router.post('/login', [
  check('email', 'email is required').not().isEmpty().isEmail(),
  check('password', 'password is required').not().isEmpty(),
  validateField
], AuthController.login)

export default router
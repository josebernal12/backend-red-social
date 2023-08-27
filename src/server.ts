import express from 'express'
import authRouter from './router/auth'
import connectDB from './database/db'
import dotenv from 'dotenv'
import postRouter from './router/post'
import cors from 'cors'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api/auth', authRouter)
app.use('/api/post', postRouter)
app.listen(8080, () => {
  console.log('port listening to the port 8080')
  connectDB()
})
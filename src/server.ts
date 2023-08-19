import express from 'express'
import authRouter from './router/auth'
import connectDB from './database/db'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
app.use(express.json())
app.use('/api/auth', authRouter)

app.listen(8080, () => {
  console.log('port listening to the port 8080')
  connectDB()
})
import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const exist = await mongoose.connect(process.env.MONGO || 'defaultmongo')
    console.log('database is connected', exist.model.name)
  } catch (error) {
    console.log(error)
  }
}

export default connectDB
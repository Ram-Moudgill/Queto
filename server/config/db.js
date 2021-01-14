import mongoose from 'mongoose'
const db = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    console.log(`database connected ${connect.connection.host}`)
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}
export default db

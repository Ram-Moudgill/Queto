import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import db from './config/db.js'
import userAuth from './routes/userAuth.js'
import quetoes from './routes/quetoes.js'
import errorHandler from './middlewares/errorHandler.js'
// import upload from './routes/upload.js'
import path from 'path'
const app = express()
const Port = process.env.PORT || 4000
dotenv.config()
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use(express.json({ extended: false }))
app.use(cors())
db()
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
app.use('/quetoes/api/v1', userAuth)
// app.use('/quetoes/api/v1', upload)
app.use('/quetoes/api/v1', quetoes)
app.use(errorHandler)
app.listen(Port, () => {
  console.log(
    `Server is listening in ${process.env.NODE_ENV} mode on port ${process.env.Port} `
  )
})
process.on('unhandledRejection', (error, promise) => {
  console.log(`Error: ${error.message}`.red)
  // Close server & exit process
  // server.close(() => process.exit(1));
})

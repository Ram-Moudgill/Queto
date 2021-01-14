const errorHandler = (error, req, res, next) => {
  res.status(error.statusCode || 500).json({ message: error.message })
  console.log(error.message)
  // next()
}
export default errorHandler

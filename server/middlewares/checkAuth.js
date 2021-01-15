import jwt from 'jsonwebtoken'
const checkAuth = (req, res, next) => {
  const token = req.header('queto-auth-token')
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' })
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET)
    req.userId = decoded.id
    req.username = decoded.username
    next()
  } catch (err) {
    throw new Error(err.msg, 401)
  }
}
export default checkAuth

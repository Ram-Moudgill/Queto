import userModel from '../models/user.js'
export const checkUsername = (req, res, next) => {
  const username = userModel.findOne({ username: req.body.username })
  if (username) {
    return res.json({ msg: 'This username is already taken' })
  }
  next()
}
export const checkEmail = (req, res, next) => {
  const email = userModel.findOne({ email: req.body.email })
  if (email) {
    return res.json({ msg: 'user is already register with this email' })
  }
  next()
}

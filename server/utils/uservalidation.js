import { check } from 'express-validator'
export const userValidationRegister = [
  // check('image', 'Choose image file').notEmpty(),
  check('username', 'Please enter username').notEmpty(),
  check('email', 'Please enter valid email address').isEmail(),
  check('password', 'Password must contain 8 letters').isLength({ min: 8 }),
]
export const userValidationLogin = [
  check('email', 'Please enter valid email address').isEmail(),
  check('password', 'Please enter the password').notEmpty(),
]
export const forgotpasswordValidation = [
  check('email', 'Please enter valid email address').isEmail(),
]
export const forgotpasswordHandlerValidation = [
  check('password', 'enter password').notEmpty(),
  check('password', 'Password must contain 8 letters').isLength({ min: 8 }),
]

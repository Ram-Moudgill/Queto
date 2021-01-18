import { check } from 'express-validator'
export const quetoValidationAdd = [
  // check('image', 'Choose image file').notEmpty(),
  check('title', 'Please enter title').notEmpty(),
  check('queto', 'Queto must contain 8 letters').isLength({ min: 8 }),
  check('category', 'Please select tag').notEmpty(),
]
// export const userValidationLogin = [
//   check('email', 'Please enter valid email address').isEmail(),
//   check('password', 'Please enter the password').notEmpty(),
// ]

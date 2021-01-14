import express from 'express'
import path from 'path'
import multer from 'multer'
const router = express.Router()
import {
  userValidationLogin,
  userValidationRegister,
} from '../utils/uservalidation.js'
import {
  registerUser,
  LoginUser,
  deleteUser,
  activateAccount,
} from '../controllers/userAuth.js'
import checkAuth from '../middlewares/checkAuth.js'
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only!')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})
//@access public
//@endpoint /quetoes/api/v1/register
//desc register a new user into database
//method post
router.post(
  '/register',
  upload.single('image'),
  userValidationRegister,
  registerUser
)
//@access private
//@endpoint /quetoes/api/v1/activate
//activate user
//method get
router.post('/activate', activateAccount)
//@access public
//@endpoint /quetoes/api/v1/login
//@desc login to existing account
//method post
router.post('/login', userValidationLogin, LoginUser)
//@access private
//@endpoint /quetoes/api/v1/deleteaccount/:id
//@desc delete user account
//method delete
router.delete('/deleteaccount/:id', checkAuth, deleteUser)

export default router

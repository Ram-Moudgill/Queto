import { validationResult } from 'express-validator'
import ErrorHandler from '../utils/ErrorHandler.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import userModel from '../models/user.js'
import errorHandler from '../middlewares/errorHandler.js'
import nodemailer from 'nodemailer'
import { OAuth2Client } from 'google-auth-library'

//@access public
//@endpoint /quetoes/api/v1/register
//desc register a new user into database
//method post
export const registerUser = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return next(new ErrorHandler(errors.array()[0].msg, 400))
  }
  const { username, email, password } = req.body
  try {
    const checkUsername = await userModel.findOne({ username })
    if (checkUsername) {
      console.log('ok')
      return next(new ErrorHandler('Username is already taken ', 400))
    }
    const checkEmail = await userModel.findOne({ email })
    if (checkEmail) {
      return next(new ErrorHandler('Email is already registered ', 400))
    }
    const token = jwt.sign(
      {
        username: username,
        email: email,
        password: password,
        image: req.file.path,
      },
      process.env.SECRET,
      { expiresIn: '30d' }
    )

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'rammoudgill3054@gmail.com',
        pass: 'R@m2647c',
      },
    })
    const mailOptions = {
      from: 'rammoudgill3054@gmail.com',
      to: email,
      subject: 'This is the account activation link from Quetoes',
      text: `${process.env.CLIENT}/activate/${token}`,
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })
    res.json(`activation link has been sent on ${email}`)
  } catch (error) {
    console.log(error)
    next(new ErrorHandler(error.message))
  }
}
//@access public
//@endpoint /quetoes/api/v1/register
//desc register a new user into database
//method post
export const activateAccount = async (req, res, next) => {
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() })
  // }
  const { token } = req.body
  if (!token) {
    return next(new ErrorHandler('unauthorized', 401))
  }
  try {
    const decoded = await jwt.verify(token, process.env.SECRET)
    const { username, email, password, image } = decoded
    const checkEmailbs = await userModel.findOne({ email })
    if (checkEmailbs) {
      return next(new ErrorHandler('this email is already registered', 400))
    }
    const newUser = new userModel({
      username,
      email,
      password,
      image,
    })
    await newUser.save()
    res.json('user registered successfully')
  } catch (error) {
    next(new ErrorHandler('invalid token', 400))
  }
}
//@access public
//@endpoint /quetoes/api/v1/login
//@desc login to existing account
//method post
export const LoginUser = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    // console.log(errors.array()[0].msg)
    return next(new ErrorHandler(errors.array()[0].msg, 404))
  }
  const { email, password } = req.body
  try {
    const checkLogin = await userModel.findOne({ email })
    if (!checkLogin) {
      return next(
        new ErrorHandler(
          'No user is registered with this email please sign in first',
          404
        )
      )
    }
    const checkPass = await bcrypt.compare(password, checkLogin.password)
    if (!checkPass) {
      return next(new ErrorHandler('Password not matched', 401))
    }
    const token = jwt.sign(
      {
        id: checkLogin._id,
      },
      process.env.SECRET,
      { expiresIn: '30d' }
    )
    res.json({
      token: token,
      username: checkLogin.username,
      image: checkLogin.image,
    })
  } catch (error) {
    next(new ErrorHandler('server error'))
  }
}
//@access public
//@endpoint /quetoes/api/v1/deleteaccount/:id
//@desc delete user account
//method delete
export const deleteUser = (req, res, next) => {
  res.send(`delete user ${req.params.id}`)
}
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
export const googleLogin = async (req, res, next) => {
  const { idToken } = req.body
  try {
    const response = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    })
    // console.log(response.payload)
    const { email_verified, name, email, picture } = response.payload
    if (!email_verified) {
      return next(new ErrorHandler('Not Authorized', 400))
    }
    const checkUserData = await userModel.findOne({ email })
    console.log(email)
    if (checkUserData) {
      console.log(checkUserData)
      const token = jwt.sign(
        {
          id: checkUserData._id,
        },
        process.env.SECRET,
        { expiresIn: '30d' }
      )
      return res.json({
        token: token,
        data: 'data',
        username: checkUserData.username,
        image: checkUserData.image,
      })
    }
    const newUser = new userModel({
      username: name,
      email: email,
      password: email + process.env.SECRET,
      image: picture,
    })
    const createdUser = await newUser.save()
    const token = jwt.sign(
      {
        id: createdUser._id,
      },
      process.env.SECRET,
      { expiresIn: '30d' }
    )
    return res.json({
      token: token,
      username: createdUser.username,
      image: createdUser.image,
    })
  } catch (error) {
    console.log(error)
  }
}

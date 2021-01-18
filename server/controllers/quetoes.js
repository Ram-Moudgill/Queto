import quetoModel from '../models/queto.js'
// import userModel from '../models/userModel.js'
import ErrorHandler from '../utils/ErrorHandler.js'
import { validationResult } from 'express-validator'
//@access public
//@endpoint /quetoes/api/v1/quetoes
//@desc add new queto
//method get
export const getQuetoes = async (req, res, next) => {
  try {
    let sortvalue
    if (req.query.sort === 'likes') {
      sortvalue = 'likes'
      sortype = -1
    } else {
      sortvalue = 'createdAt'
    }
    console.log(sortvalue)
    const quetoes = await quetoModel
      .find()
      .populate('user')
      .sort({ $sortvalue: -1 })
    res.json(quetoes)
  } catch (error) {
    next(new ErrorHandler(error.message, 404))
  }
}

//@access private
//@endpoint /quetoes/api/v1/quetoes
//@desc add new queto
//method post
export const addQueto = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return next(new ErrorHandler(errors.array()[0].msg), 400)
  }
  const { title, category, queto } = req.body
  const user = req.userId
  try {
    const newQueto = new quetoModel({
      user,
      title,
      queto,
      category,
    })
    await newQueto.save()
    res.json('Queto uploaded successfully')
  } catch (error) {
    console.error(eror.message)
    next(new ErrorHandler('server error'))
  }
}
//@access public
//@endpoint /quetoes/api/v1/quetoes
//@desc get single queto
//method get
export const getQueto = async (req, res, next) => {
  try {
    const queto = await quetoModel.findById(req.params.id)
    if (!queto) {
      return next(new ErrorHandler('No Queto found ', 404))
    }
    res.json(queto)
  } catch (error) {
    next(new ErrorHandler('No Queto found with this id', 404))
  }
}
//@access private
//@endpoint /quetoes/api/v1/quetoes/:id
//@desc add new queto
//method post
export const deleteQueto = async (req, res, next) => {
  try {
    const quetoForDel = await quetoModel.findById(req.params.id)
    if (!quetoForDel) {
      return res.status(404).json({ msg: 'Queto not found' })
    }
    console.log(req.userId)
    console.log(quetoForDel.userId)
    if (quetoForDel.user.toString() !== req.userId) {
      return next(new ErrorHandler('not authorized', 401))
    }
    await quetoModel.findByIdAndDelete(req.params.id)
    res.json({ msg: 'Queto deleted successfully' })
  } catch (error) {
    next(error)
  }
}
//@access private
//@endpoint /quetoes/api/v1/quetoes/:id
//@desc update the queto
//method put
export const updateQueto = async (req, res, next) => {
  const { title, description, category } = req.body
  const quetoFields = {}
  if (title) quetoFields.title = title
  if (description) quetoFields.description = description
  if (category) quetoFields.category = category
  try {
    const checkQueto = await quetoModel.findById(req.params.id)
    if (!checkQueto) {
      return res.status(404).json({ msg: 'Queto not found' })
    }
    if (checkQueto.user.toString() !== req.userId) {
      return next(new ErrorHandler('not authorized', 401))
    }
    await quetoModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: quetoFields,
      },
      { new: true }
    )
    res.json('Queto updated Successfully')
  } catch (error) {
    next(new ErrorHandler(error.message, 404))
  }
}
export const getUserQuetoes = async (req, res, next) => {
  try {
    const userquetoes = await quetoModel.find({ user: req.userId })
    res.json(userquetoes)
  } catch (error) {
    next(new ErrorHandler(error.message, 404))
  }
}

import express from 'express'
const router = express.Router()
import checkAuth from '../middlewares/checkAuth.js'
import { quetoValidationAdd } from '../utils/quetoValidation.js'
import {
  addQueto,
  deleteQueto,
  getQueto,
  getQuetoes,
  updateQueto,
} from '../controllers/quetoes.js'
router
  .get('/quetoes', getQuetoes)
  .post('/quetoes', checkAuth, quetoValidationAdd, addQueto)
router
  .get('/quetoes/:id', getQueto)
  .delete('/quetoes/:id', checkAuth, deleteQueto)
  .put('/quetoes/:id', checkAuth, updateQueto)

export default router

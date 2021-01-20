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
  getUserQuetoes,
  likeQueto,
} from '../controllers/quetoes.js'
router
  .get('/quetoes', getQuetoes)
  .post('/quetoes', checkAuth, quetoValidationAdd, addQueto)
router
  .get('/quetoes/:id', getQueto)
  .delete('/quetoes/:id', checkAuth, deleteQueto)
  .put('/quetoes/:id', checkAuth, updateQueto)
router.put('/quetoes/likequeto', checkAuth, likeQueto)
router.get('/userquetoes', checkAuth, getUserQuetoes)
export default router

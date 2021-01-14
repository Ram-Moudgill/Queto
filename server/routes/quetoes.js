import express from 'express'
import multer from 'multer'
const router = express.Router()
import checkAuth from '../middlewares/checkAuth.js'
import {
  addQueto,
  deleteQueto,
  getQueto,
  getQuetoes,
  updateQueto,
} from '../controllers/quetoes.js'
const upload = multer({ dest: 'uploads/' })
router.get('/quetoes', getQuetoes).post('/quetoes', checkAuth, addQueto)
router
  .get('/quetoes/:id', getQueto)
  .delete('/quetoes/:id', checkAuth, deleteQueto)
  .put('/quetoes/:id', checkAuth, updateQueto)

export default router

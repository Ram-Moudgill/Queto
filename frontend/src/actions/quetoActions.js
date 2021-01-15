import {
  QUETOES_REQUEST,
  QUETOES_SUCCESS,
  QUETOES_FAILED,
  QUETO_ADD_REQUEST,
  QUETO_ADD_FAILED,
  QUETO_ADD_SUCCESS,
} from '../constants/quetoTypes'
import axios from 'axios'
export const getQuetoes = () => async (dispatch) => {
  try {
    dispatch({ type: QUETOES_REQUEST })
    const { data } = await axios.get(
      'http://localhost:4000/quetoes/api/v1/quetoes'
    )
    dispatch({ type: QUETOES_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: QUETOES_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const addNewQueto = (title, queto, category) => async (dispatch) => {
  try {
    const { token } = JSON.parse(localStorage.getItem('userInfo'))
    console.log(title)
    console.log(queto)
    console.log(category)
    dispatch({ type: QUETO_ADD_REQUEST })
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'queto-auth-token': token,
      },
    }
    const { data } = await axios.post(
      '/quetoes/api/v1/quetoes',
      {
        title,
        queto,
        category,
      },
      config
    )
    dispatch({ type: QUETO_ADD_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: QUETO_ADD_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

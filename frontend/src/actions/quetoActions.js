import {
  QUETOES_REQUEST,
  QUETOES_SUCCESS,
  QUETOES_FAILED,
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

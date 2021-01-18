import {
  QUETOES_REQUEST,
  QUETOES_SUCCESS,
  QUETOES_FAILED,
  MOST_LIKED_QUETOES_REQUEST,
  MOST_LIKED_QUETOES_SUCCESS,
  MOST_LIKED_QUETOES_FAILED,
  QUETO_ADD_REQUEST,
  QUETO_ADD_FAILED,
  QUETO_ADD_SUCCESS,
  QUETO_DELETE_SUCCESS,
  // QUETO_ADD_FAILED,
  QUETO_DELETE_FAILED,
  QUETO_DELETE_REQUEST,
  SINGLE_QUETO_REQUEST,
  SINGLE_QUETO_SUCCESS,
  SINGLE_QUETO_FAILED,
  QUETO_UPDATE_REQUEST,
  QUETO_UPDATE_SUCCESS,
  QUETO_UPDATE_FAILED,
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
export const getSingleQueto = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_QUETO_REQUEST })
    const { data } = await axios.get(`/quetoes/api/v1/quetoes/${id}`)
    dispatch({ type: SINGLE_QUETO_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: SINGLE_QUETO_FAILED,
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
    setTimeout(() => {
      dispatch({
        type: QUETO_ADD_SUCCESS,
        payload: '',
      })
    }, 4000)
  } catch (error) {
    dispatch({
      type: QUETO_ADD_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
    setTimeout(() => {
      dispatch({
        type: QUETO_ADD_FAILED,
        payload: '',
      })
    }, 4000)
  }
}
export const userQuetos = () => async (dispatch) => {
  try {
    const { token } = JSON.parse(localStorage.getItem('userInfo'))
    dispatch({ type: QUETOES_REQUEST })
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'queto-auth-token': token,
      },
    }
    const { data } = await axios.get('/quetoes/api/v1/userquetoes', config)
    dispatch({ type: QUETOES_SUCCESS, payload: data })
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
export const deleteQueto = (id) => async (dispatch) => {
  try {
    const { token } = JSON.parse(localStorage.getItem('userInfo'))
    dispatch({ type: QUETO_DELETE_REQUEST })
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'queto-auth-token': token,
      },
    }
    await axios.delete(`/quetoes/api/v1/quetoes/${id}`, config)
    dispatch({ type: QUETO_DELETE_SUCCESS })
  } catch (error) {
    dispatch({
      type: QUETO_DELETE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
    // setTimeout(() => {
    //   dispatch({
    //     type: QUETO_DELETE_FAILED,
    //     payload: '',
    //   })
    // }, 7000)
  }
}

export const updateQueto = (id, title, queto, category) => async (dispatch) => {
  try {
    const { token } = JSON.parse(localStorage.getItem('userInfo'))
    dispatch({ type: QUETO_UPDATE_REQUEST })
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'queto-auth-token': token,
      },
    }
    const { data } = await axios.put(
      `/quetoes/api/v1/quetoes/${id}`,
      {
        title,
        queto,
        category,
      },
      config
    )
    dispatch({ type: QUETO_UPDATE_SUCCESS, payload: data })
    setTimeout(() => {
      dispatch({
        type: QUETO_UPDATE_SUCCESS,
        payload: '',
      })
    }, 4000)
  } catch (error) {
    dispatch({
      type: QUETO_UPDATE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
    setTimeout(() => {
      dispatch({
        type: QUETO_UPDATE_FAILED,
        payload: '',
      })
    }, 4000)
  }
}
export const mostLiked = () => async (dispatch) => {
  try {
    dispatch({ type: MOST_LIKED_QUETOES_REQUEST })
    const { data } = await axios.get(
      'http://localhost:4000/quetoes/api/v1/quetoes?sort=likes'
    )
    dispatch({ type: MOST_LIKED_QUETOES_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: MOST_LIKED_QUETOES_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
  USER_ACTIVATION_FAILED,
  USER_ACTIVATION_REQUEST,
  USER_ACTIVATION_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_PASS_FORGOT_REQUEST,
  USER_PASS_FORGOT_SUCCESS,
  USER_PASS_FORGOT_FAILED,
  USER_PASSFORGOT_REQUEST,
  USER_PASSFORGOT_SUCCESS,
  USER_PASSFORGOT_FAILED,
} from '../constants/userTypes'
import axios from 'axios'
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/quetoes/api/v1/login',
      { email, password },
      config
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT })
}
export const activateUser = (token) => async (dispatch) => {
  try {
    dispatch({
      type: USER_ACTIVATION_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/quetoes/api/v1/activate',
      { token },
      config
    )

    dispatch({
      type: USER_ACTIVATION_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_ACTIVATION_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const registerUser = (image, username, email, password) => async (
  dispatch
) => {
  try {
    const formData = new FormData()
    console.log(formData)
    formData.append('image', image)
    formData.append('username', username)
    formData.append('email', email)
    formData.append('password', password)
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        // 'Content-Type': 'multipart/form-data',
      },
    }

    const { data } = await axios.post(
      '/quetoes/api/v1/register',
      formData,
      config
    )

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
    setTimeout(() => {
      dispatch({
        type: USER_REGISTER_FAILED,
        payload: '',
      })
    }, 7000)
  }
}
export const googleLogin = (idToken) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/quetoes/api/v1/googlelogin',
      { idToken },
      config
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
    setTimeout(() => {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: '',
      })
    }, 7000)
  }
}
export const forgotRequest = (email) => async (dispatch) => {
  try {
    dispatch({
      type: USER_PASS_FORGOT_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/quetoes/api/v1/forgotrequest',
      { email },
      config
    )

    dispatch({
      type: USER_PASS_FORGOT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_PASS_FORGOT_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const forgotPass = (token, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_PASSFORGOT_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.put(
      `/quetoes/api/v1/forgothandler`,
      { token, password },
      config
    )

    dispatch({
      type: USER_PASSFORGOT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_PASSFORGOT_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

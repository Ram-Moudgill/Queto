import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
  USER_ACTIVATION_REQUEST,
  USER_ACTIVATION_SUCCESS,
  USER_ACTIVATION_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_PASS_FORGOT_FAILED,
  USER_PASS_FORGOT_SUCCESS,
  USER_PASS_FORGOT_REQUEST,
  USER_PASSFORGOT_FAILED,
  USER_PASSFORGOT_SUCCESS,
  USER_PASSFORGOT_REQUEST,
} from '../constants/userTypes'

export const userloginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_FAILED:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}
export const userActivationReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ACTIVATION_REQUEST:
      return { loading: true }
    case USER_ACTIVATION_SUCCESS:
      return { loading: false, activeInfo: action.payload }
    case USER_ACTIVATION_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return { loading: false, registerInfo: action.payload }
    case USER_REGISTER_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const forgotReqReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PASS_FORGOT_REQUEST:
      return { loading: true }
    case USER_PASS_FORGOT_SUCCESS:
      return { loading: false, forgotReqInfo: action.payload }
    case USER_PASS_FORGOT_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const forgotpassReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PASSFORGOT_REQUEST:
      return { loading: true }
    case USER_PASSFORGOT_SUCCESS:
      return { loading: false, forgotpassInfo: action.payload }
    case USER_PASSFORGOT_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

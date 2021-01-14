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

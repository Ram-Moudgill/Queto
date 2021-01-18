import {
  QUETOES_REQUEST,
  QUETOES_SUCCESS,
  QUETOES_FAILED,
  MOST_LIKED_QUETOES_REQUEST,
  MOST_LIKED_QUETOES_SUCCESS,
  MOST_LIKED_QUETOES_FAILED,
  QUETO_ADD_SUCCESS,
  QUETO_ADD_REQUEST,
  QUETO_ADD_FAILED,
  QUETO_DELETE_REQUEST,
  QUETO_DELETE_SUCCESS,
  QUETO_DELETE_FAILED,
  SINGLE_QUETO_REQUEST,
  SINGLE_QUETO_SUCCESS,
  SINGLE_QUETO_FAILED,
  QUETO_UPDATE_FAILED,
  QUETO_UPDATE_REQUEST,
  QUETO_UPDATE_SUCCESS,
} from '../constants/quetoTypes'
export const quetoReducer = (state = { quetoes: [] }, action) => {
  switch (action.type) {
    case QUETOES_REQUEST:
      return { ...state, loading: true, quetoes: [] }
    case QUETOES_SUCCESS:
      return { ...state, loading: false, quetoes: action.payload }
    case QUETOES_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const mostLikesQuetoReducer = (state = { quetoes: [] }, action) => {
  switch (action.type) {
    case MOST_LIKED_QUETOES_REQUEST:
      return { ...state, loading: true, quetoes: [] }
    case MOST_LIKED_QUETOES_SUCCESS:
      return { ...state, loading: false, quetoes: action.payload }
    case MOST_LIKED_QUETOES_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const userquetoReducer = (state = { quetoes: [] }, action) => {
  switch (action.type) {
    case QUETOES_REQUEST:
      return { ...state, loading: true, quetoes: [] }
    case QUETOES_SUCCESS:
      return { ...state, loading: false, quetoes: action.payload }
    case QUETOES_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const addQuetoReducer = (state = {}, action) => {
  switch (action.type) {
    case QUETO_ADD_REQUEST:
      return { loading: true }
    case QUETO_ADD_SUCCESS:
      return { loading: false, addQuetoInfo: action.payload }
    case QUETO_ADD_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const deleteReducer = (state = {}, action) => {
  switch (action.type) {
    case QUETO_DELETE_REQUEST:
      return { loading: true }
    case QUETO_DELETE_SUCCESS:
      return { loading: false, deleteQuetoInfo: true }
    case QUETO_DELETE_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const singleQuetoReducer = (state = {}, action) => {
  switch (action.type) {
    case SINGLE_QUETO_REQUEST:
      return { loading: true }
    case SINGLE_QUETO_SUCCESS:
      return { loading: false, singleQueto: action.payload }
    case SINGLE_QUETO_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const updateQuetoReducer = (state = {}, action) => {
  switch (action.type) {
    case QUETO_UPDATE_REQUEST:
      return { loading: true }
    case QUETO_UPDATE_SUCCESS:
      return { loading: false, updateInfo: action.payload }
    case QUETO_UPDATE_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

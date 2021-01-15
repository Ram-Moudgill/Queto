import {
  QUETOES_REQUEST,
  QUETOES_SUCCESS,
  QUETOES_FAILED,
  QUETO_ADD_SUCCESS,
  QUETO_ADD_REQUEST,
  QUETO_ADD_FAILED,
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

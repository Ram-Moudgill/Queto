import {
  QUETOES_REQUEST,
  QUETOES_SUCCESS,
  QUETOES_FAILED,
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

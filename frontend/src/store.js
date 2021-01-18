import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
  addQuetoReducer,
  quetoReducer,
  userquetoReducer,
  deleteReducer,
  singleQuetoReducer,
  updateQuetoReducer,
  mostLikesQuetoReducer,
} from './reducers/quetoReducer'
import {
  // userquetoReducer,
  userloginReducer,
  userActivationReducer,
  userRegisterReducer,
} from './reducers/userReducer'
import jwt from 'jsonwebtoken'
const middleware = [thunk]
const reducer = combineReducers({
  quetoData: quetoReducer,
  userLogin: userloginReducer,
  userActivation: userActivationReducer,
  userRegister: userRegisterReducer,
  userProfile: quetoReducer,
  addQueto: addQuetoReducer,
  deleteQuetoes: deleteReducer,
  singleQueto: singleQuetoReducer,
  updateInfo: updateQuetoReducer,
  mostLiked: mostLikesQuetoReducer,
})
const userLoginStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null
let userLoginStoragecheck
try {
  jwt.verify(userLoginStorage.token, process.env.REACT_APP_SECRET)
  userLoginStoragecheck = userLoginStorage
} catch (error) {
  userLoginStoragecheck = null
  localStorage.setItem('userInfo', null)
}

// console.log(process.env.REACT_APP_SECRET)
const initialState = {
  userLogin: { userInfo: userLoginStoragecheck },
}
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store

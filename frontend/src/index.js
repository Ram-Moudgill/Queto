import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './index.css'
import App from './App'
import Favicon from 'react-favicon'
import favicon from './images/favicon.ico'

ReactDOM.render(
  <Provider store={store}>
    <Favicon url={favicon} />
    <App />
  </Provider>,
  document.getElementById('root')
)

import React from 'react'
import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Home from './Screens/Home'
import QuetoScreen from './Screens/QuetoScreen'
import Register from './Screens/Register'
import Login from './Screens/Login'
import Activate from './Screens/Activate'
import AddQueto from './Screens/AddQueto'
import Userprofile from './Screens/Userprofile'
import Update from './Screens/Update'
import Mostliked from './Screens/Mostliked'
import ForgetRequest from './Screens/FogetRequest'
import ForgotPass from './Screens/ForgotPass'

const App = () => {
  return (
    <BrowserRouter>
      <div className='container-fluid p-0 m-0'>
        <header>
          <Navbar brand={'Queto'}></Navbar>
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/activate/:id' component={Activate}></Route>
            <Route exact path='/quetoes/:id' component={QuetoScreen}></Route>
            <Route exact path='/addqueto' component={AddQueto}></Route>
            <Route exact path='/updatequeto/:id' component={Update}></Route>
            <Route exact path='/forgotpass/:id' component={ForgotPass}></Route>
            <Route exact path='/profile' component={Userprofile}></Route>
            <Route exact path='/mostliked' component={Mostliked}></Route>
            <Route
              exact
              path='/forgotrequest'
              component={ForgetRequest}
            ></Route>
            <Redirect to='/'></Redirect>
          </Switch>
        </main>
        {/* <Footer></Footer> */}
      </div>
    </BrowserRouter>
  )
}

export default App

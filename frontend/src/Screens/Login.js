import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../css/Register.css'
import { Link } from 'react-router-dom'
import Message from '../Components/Message'
import { loginUser, googleLogin } from '../actions/userActions'
import Spinner from '../Components/Spinner'
import { GoogleLogin } from 'react-google-login'
const Login = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispath = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, userInfo, error } = userLogin
  useEffect(() => {
    if (userInfo) {
      history.push(`/`)
    }
  }, [history, userInfo])
  const handleSubmit = (e) => {
    e.preventDefault()
    dispath(loginUser(email, password))
  }
  const handleLogin = async (googleData) => {
    dispath(googleLogin(googleData.tokenId))
  }
  return (
    <>
      <div className='row m-0 p-0' style={{ background: '#fff' }}>
        <div className='col-md-5 p-0 flex-column d-flex justify-content-center align-items-center'>
          <div
            className='img-header d-flex justify-content-center flex-column align-items-center'
            style={{ width: '100%', background: '#fff', height: '14vh' }}
          >
            <h5>Queto</h5>
            <h5>get latest Quetos all over the World</h5>
          </div>
          <img
            className='side-img'
            src='https://cdn.dribbble.com/users/241205/screenshots/9023972/media/2630a26e249f4f24e206afa3fe863158.png?compress=1&resize=1000x750'
            alt='sideimg'
            style={{ height: '60vh' }}
          ></img>
          <div
            className='img-footer d-flex align-items-center justify-content-center'
            style={{ width: '100%', background: '#fff', height: '13.5vh' }}
          >
            <p>img by queto</p>
          </div>
        </div>
        <div className='col-md-7'>
          <div className='row form-row d-flex justify-content-center align-items-center flex-column'>
            <div className='col-md-5 mx-auto'>
              <p className='text-right'>
                Not a member?{' '}
                <Link to='/register' style={{ textDecoration: 'none' }}>
                  Sign up now
                </Link>
              </p>
              <div className='upper-section d-flex justify-content-center flex-column'>
                <h4 className='my-4'>Sign in</h4>
                {error && <Message error={error} variant={'danger'}></Message>}
                {loading && <Spinner></Spinner>}
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  render={(renderProps) => (
                    <button
                      className='btn btn-primary my-4'
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <i className='fab fa-google text-white'></i> Log in with
                      google
                    </button>
                  )}
                  buttonText='Log in with Google'
                  onSuccess={handleLogin}
                  onFailure={handleLogin}
                  cookiePolicy={'single_host_origin'}
                />
              </div>

              <div className='form w-100 '>
                <form action='' method='POST' onSubmit={handleSubmit}>
                  <label htmlFor='email'>Email</label>
                  <input
                    className='form-control input'
                    type='email'
                    name='email'
                    id='email'
                    placeholder='example@mail.com'
                    // required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                  />
                  <label htmlFor='password'>Password</label>
                  <input
                    className='form-control input'
                    type='password'
                    id='password'
                    name='username'
                    placeholder='7+ characters'
                    // required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                  />

                  <Link to='/forgotrequest' style={{ textDecoration: 'none' }}>
                    forgot password?
                  </Link>
                  <input
                    className='btn btn-design1 mt-4 btn-block form-control input'
                    type='submit'
                    value='Sign in'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

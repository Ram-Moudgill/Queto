import React, { useState, useEffect } from 'react'
import sideImg from '../images/img.png'
import { Link } from 'react-router-dom'
import { registerUser, googleLogin } from '../actions/userActions'
import '../css/Register.css'
import Message from '../Components/Message'
import Spinner from '../Components/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
const Register = ({ history }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState(undefined)
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userLogin)
  useEffect(() => {
    if (userInfo) {
      history.push(`/`)
    }
  }, [history, userInfo])
  const { loading, error, registerInfo } = useSelector(
    (state) => state.userRegister
  )
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerUser(image, username, email, password))
  }
  const handleLogin = async (googleData) => {
    console.log(googleData)
    dispatch(googleLogin(googleData.tokenId))
  }
  return (
    <>
      <div className='row m-0 p-0' style={{ background: '#fff' }}>
        <div className='col-md-4 p-0 flex-column d-flex justify-content-center align-items-center'>
          <div
            className='img-header d-flex justify-content-center flex-column align-items-center'
            style={{ width: '100%', background: '#F3D186', height: '14vh' }}
          >
            <h5>Queto</h5>
            <h5>get latest Quetos all over the World</h5>
          </div>
          <img
            className='side-img'
            src={sideImg}
            alt='sideimg'
            style={{ height: '60vh' }}
          ></img>
          <div
            className='img-footer d-flex align-items-center justify-content-center'
            style={{ width: '100%', background: '#F3D186', height: '13.5vh' }}
          >
            <p>img by queto</p>
          </div>
        </div>
        <div className='col-md-8'>
          <div className='row form-row d-flex justify-content-center align-items-center flex-column'>
            <div className='col-md-5 mx-auto'>
              <p className='text-right'>
                Already a member?{' '}
                <Link to='login' style={{ textDecoration: 'none' }}>
                  log in
                </Link>
              </p>
              <div className='upper-section d-flex justify-content-center flex-column'>
                <h4 className='my-4'>Sign up to Queto</h4>
                {error && <Message error={error} variant={'danger'}></Message>}
                {registerInfo && (
                  <Message error={registerInfo} variant={'primary'}></Message>
                )}
                {loading && <Spinner></Spinner>}
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  render={(renderProps) => (
                    <button
                      className='btn btn-primary my-4'
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <i className='fab fa-google text-white'></i> Sign up with
                      google
                    </button>
                  )}
                  buttonText='Sign up with Google'
                  onSuccess={handleLogin}
                  onFailure={handleLogin}
                  cookiePolicy={'single_host_origin'}
                />
                {/* <button className='btn btn-primary my-4'>
                  <i className='fab fa-google text-white'></i> Sign up with
                  google
                </button> */}
              </div>

              <div className='form w-100 '>
                <form
                  action=''
                  method='POST'
                  encType='multipart/form-data'
                  onSubmit={handleSubmit}
                >
                  <label htmlFor='username'>Username</label>
                  <input
                    className='form-control input'
                    type='text'
                    name='username'
                    id='username'
                    placeholder='username'
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value)
                    }}
                    required
                  />
                  <label htmlFor='email'>Email</label>
                  <input
                    className='form-control input'
                    type='email'
                    name='email'
                    id='email'
                    placeholder='example@mail.com'
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    required
                  />
                  <label htmlFor='password'>Password</label>
                  <input
                    className='form-control input'
                    type='password'
                    id='password'
                    name='username'
                    placeholder='7+ characters'
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                    minLength='8'
                    required
                  />
                  <label htmlFor='password'>Image</label>
                  <input
                    className='form-control input'
                    type='file'
                    id='file'
                    name='image'
                    placeholder='choose image'
                    accept='image/*'
                    onChange={(e) => {
                      console.log(e.target.files[0])
                      setImage(e.target.files[0])
                    }}
                    // required
                  />
                  <input
                    className='btn btn-design1 mt-4 btn-block form-control'
                    type='submit'
                    value='Sign up'
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

export default Register

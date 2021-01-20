import React, { useState, useEffect } from 'react'
import '../css/Register.css'
import Message from '../Components/Message'
import Spinner from '../Components/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPass } from '../actions/userActions'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Link } from 'react-router-dom'
const ForgotPass = ({ history, match }) => {
  const [confirm, setConfirmPassword] = useState('')
  const dispatch = useDispatch()
  const [password, setPassword] = useState('')
  const [check, setCheck] = useState(null)
  const { userInfo } = useSelector((state) => state.userLogin)
  useEffect(() => {
    if (userInfo) {
      history.push(`/`)
    }
  }, [history, userInfo])
  const { forgotpassInfo, error, loading } = useSelector(
    (state) => state.forgotPass
  )
  const handleForm = (e) => {
    e.preventDefault()
    dispatch(forgotPass(match.params.id, password))
    setPassword('')
    setConfirmPassword('')
  }
  return (
    <>
      <div className='row m-0 p-0' style={{ background: '#fff' }}>
        <div className='row form-row d-flex justify-content-center align-items-center flex-column'>
          <div className='col-md-6 col-sm-9 mx-auto'>
            <div className='upper-section d-flex justify-content-center flex-column'>
              <h4 className='my-4'>Enter your password</h4>
              {error && <Message error={error} variant={'danger'}></Message>}
              {forgotpassInfo && (
                <Message error={forgotpassInfo} variant={'primary'}></Message>
              )}
              {loading && <Spinner></Spinner>}
            </div>

            <div className='form w-100 '>
              <form action='' method='POST' onSubmit={handleForm}>
                <label htmlFor='password'>Password</label>
                <input
                  className='form-control input'
                  type='password'
                  name='password'
                  id='password'
                  placeholder='7+ characters'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (e.target.value === confirm) {
                      setCheck(true)
                    } else {
                      setCheck(false)
                    }
                  }}
                  required
                  minLength='8'
                />
                <label htmlFor='password'>Confirm Password</label>
                <input
                  className='form-control input'
                  type='password'
                  name='confirmpassword'
                  id='confirmpassword'
                  placeholder='7+ characters'
                  value={confirm}
                  required
                  minLength='8'
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                    if (e.target.value === password) {
                      setCheck(true)
                    } else {
                      setCheck(false)
                    }
                  }}
                />
                <i
                  class={
                    check
                      ? 'fas fa-exclamation-circle green'
                      : check === null
                      ? 'fas fa-exclamation-circle text-white'
                      : 'fas fa-exclamation-circle red'
                  }
                ></i>
                <input
                  className='btn btn-design1 mt-4 btn-block form-control'
                  type='submit'
                  value='Submit'
                  disabled={check === false}
                  required
                />
              </form>
              <div className='d-flex justify-content-center mt-3'>
                {forgotpassInfo && (
                  <Link className='btn nav__btn btn-block' to='/'>
                    <AccountCircleIcon></AccountCircleIcon> Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPass

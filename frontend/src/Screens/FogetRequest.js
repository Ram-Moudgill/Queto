import React, { useState, useEffect } from 'react'
import '../css/Register.css'
import Message from '../Components/Message'
import Spinner from '../Components/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import { forgotRequest } from '../actions/userActions'
const ForgetRequest = ({ history }) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const { userInfo } = useSelector((state) => state.userLogin)
  useEffect(() => {
    if (userInfo) {
      history.push(`/`)
    }
  }, [history, userInfo])
  const { forgotReqInfo, error, loading } = useSelector(
    (state) => state.forgotPassReq
  )
  const handleForm = (e) => {
    e.preventDefault()
    dispatch(forgotRequest(email))
    setEmail('')
  }
  return (
    <>
      <div className='row m-0 p-0' style={{ background: '#fff' }}>
        <div className='col-md-8 mx-auto'>
          <div className='row form-row d-flex justify-content-center align-items-center flex-column'>
            <div className='col-md-5 mx-auto'>
              <div className='upper-section d-flex justify-content-center flex-column'>
                <h4 className='my-4'>Enter your Email</h4>
                {error && <Message error={error} variant={'danger'}></Message>}
                {forgotReqInfo && (
                  <Message error={forgotReqInfo} variant={'primary'}></Message>
                )}
                {loading && <Spinner></Spinner>}
              </div>

              <div className='form w-100 '>
                <form action='' method='POST' onSubmit={handleForm}>
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
                  <input
                    className='btn btn-design1 mt-4 btn-block form-control'
                    type='submit'
                    value='Submit'
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

export default ForgetRequest

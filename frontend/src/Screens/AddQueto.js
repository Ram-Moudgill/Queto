import React, { useState, useEffect } from 'react'
import '../css/Register.css'
import Message from '../Components/Message'
import Spinner from '../Components/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import { addNewQueto } from '../actions/quetoActions'
const AddQueto = ({ history }) => {
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState('')
  const [queto, setQueto] = useState('')
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userLogin)
  useEffect(() => {
    if (!userInfo) {
      history.push(`/login`)
    }
  }, [history, userInfo])
  const { loading, error, addQuetoInfo } = useSelector(
    (state) => state.addQueto
  )
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addNewQueto(title, queto, tags))
    setTitle('')
    setQueto('')
    setTags('')
  }
  return (
    <>
      <div className='row m-0 p-0' style={{ background: '#fff' }}>
        <div className='col-md-10 mx-auto'>
          <div className='row form-row d-flex justify-content-center align-items-center flex-column'>
            <div className='col-lg-4 col-md-7 col-sm-9  mx-auto'>
              <div className='upper-section d-flex justify-content-center flex-column'>
                <h4 className='my-4'>Add a Queto</h4>
                {error && <Message error={error} variant={'danger'}></Message>}
                {addQuetoInfo && (
                  <Message error={addQuetoInfo} variant={'success'}></Message>
                )}
                {loading && <Spinner></Spinner>}
              </div>

              <div className='form w-100 '>
                <form action='' method='POST' onSubmit={handleSubmit}>
                  <label htmlFor='title'>Title</label>
                  <input
                    className='form-control input'
                    type='text'
                    name='title'
                    id='title'
                    placeholder='title'
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value)
                    }}
                    // required
                  />
                  <label htmlFor='tags'>Tags</label>
                  <select
                    className='form-select input'
                    type='tags'
                    name='tags'
                    id='tags'
                    value={tags}
                    onChange={(e) => {
                      setTags(e.target.value)
                    }}
                  >
                    <option value='motivation'>Motivation</option>
                    <option value='friendship'>friendship</option>
                    <option value='birthday'>birthday</option>
                    <option value='nature'>nature</option>
                    <option value='god'>god</option>
                    <option value='worship'>worship</option>
                    <option value='death'>death</option>
                    <option value='love'>Love</option>
                    <option value='others'>Others</option>
                  </select>
                  {/* // required */}
                  <label htmlFor='queto'>Queto</label>
                  <textarea
                    className='form-control input'
                    type='queto'
                    id='queto'
                    name='title'
                    placeholder='7+ characters'
                    value={queto}
                    onChange={(e) => {
                      setQueto(e.target.value)
                    }}
                    // minLength='8'
                    // required
                  />
                  <input
                    className='btn btn-design1 mt-4 btn-block form-control'
                    type='submit'
                    value='Upload Queto'
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

export default AddQueto

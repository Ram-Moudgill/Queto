import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mostLiked } from '../actions/quetoActions'
import Queto from '../Components/Queto'
import Loading from '../Components/Loading'
import Message from '../Components/Message'
import '../css/Home.css'
const Mostliked = () => {
  const dispatch = useDispatch()
  const liked = useSelector((state) => state.mostLiked)
  const { error, quetoes, loading } = liked
  useEffect(() => {
    dispatch(mostLiked())
  }, [dispatch])

  return (
    <div className='row m-0 p-0 '>
      <div className='col-md-7 col-lg-4 col-sm-8 pt-5 mx-auto'>
        <div className='row queto-row'>
          {loading ? (
            <Loading></Loading>
          ) : error ? (
            <Message error={error} variant={'danger'}></Message>
          ) : (
            quetoes &&
            quetoes.map((queto) => (
              <div key={queto._id}>
                <Queto queto={queto}></Queto>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Mostliked

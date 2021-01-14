import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuetoes } from '../actions/quetoActions'
import Queto from '../Components/Queto'
import Loading from '../Components/Loading'
import Message from '../Components/Message'
import '../css/Home.css'
const Home = () => {
  const dispath = useDispatch()
  useEffect(() => {
    dispath(getQuetoes())
  }, [dispath])
  const quetoData = useSelector((state) => state.quetoData)
  const { error, quetoes, loading } = quetoData
  return (
    <div className='row m-0 p-0 pt-5'>
      <div className='col-md-7 col-lg-4 col-sm-8 pt-5 mx-auto'>
        <div className='row queto-row pt-5'>
          {loading ? (
            <Loading></Loading>
          ) : error ? (
            <Message error={error} variant={'danger'}></Message>
          ) : (
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

export default Home

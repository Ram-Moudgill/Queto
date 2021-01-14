import React from 'react'
import '../css/Loading.css'
const Loading = () => {
  return (
    <div
      className='row p-0 m-0 d-flex justify-content-center align-items-center'
      style={{ minHeight: '70vh' }}
    >
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loading

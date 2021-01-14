import React from 'react'
import '../css/Spinner.css'
const Spinner = () => {
  return (
    <>
      <div className='spinner d-flex '>
        <div className='rect1 mx-1'></div>
        <div className='rect2 mx-1'></div>
        <div className='rect3 mx-1'></div>
        <div className='rect4 mx-1'></div>
        <div className='rect5 mx-1'></div>
      </div>
    </>
  )
}

export default Spinner

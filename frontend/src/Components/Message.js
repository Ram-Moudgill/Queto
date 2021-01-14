import React from 'react'

const Message = ({ error, variant }) => {
  return (
    <div className='row'>
      <div class={`alert alert-${variant} w-100`} role='alert'>
        {error}
      </div>
    </div>
  )
}

export default Message

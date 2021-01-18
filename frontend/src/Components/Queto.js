import React, { useState } from 'react'
import '../css/Queto.css'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined'
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined'
import Avatar from '@material-ui/core/avatar'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
const Queto = ({ queto }) => {
  // console.log(queto.user.username)
  const [popover, setPopover] = useState(false)
  const changePopover = () => {
    if (popover === true) {
      setPopover(false)
    } else {
      setPopover(true)
    }
  }
  const [text, setText] = useState('')
  function CopytoClipBoard() {
    setText('Copied!')
    setTimeout(() => {
      setText('')
    }, 700)
  }
  const date = new Date(queto.createdAt.toString())
  const time = date.toLocaleTimeString()
  const newDate = date.toString().split(/[ ,]+/)
  return (
    <>
      <div className='queto my-4'>
        <div className='top'>
          <div className='user-date-cont'>
            <Avatar src={queto.user.image}></Avatar>
            {/* <img className='avatar-img' src={myimg} alt='no img' /> */}
            <div className='userdate ml-3'>
              <small>{queto.user.username}</small>
              <br />
              <small>
                {newDate[1]}
                {newDate[2]} &nbsp;
                {time}
              </small>
            </div>
          </div>
          <div className='pop-overcont' onClick={changePopover}>
            <IconButton>
              <MoreVertIcon></MoreVertIcon>
            </IconButton>
            <div className={popover ? 'pop-over' : 'display pop-over'}>
              <Link to='/'>open</Link>
            </div>
          </div>
        </div>
        <div className='post'>
          <p>{queto.queto}</p>
        </div>
        <div className='other' style={{ position: 'relative' }}>
          <div className='totallikes d-flex justify-content-between'>
            <FavoriteIcon className='text-red'></FavoriteIcon> &nbsp;{' '}
            {queto.likes} likes
          </div>
          <div className='text-capitalize'>{queto.category}</div>
        </div>
        <div className='other' style={{ position: 'relative' }}>
          <IconButton>
            <FavoriteBorderIcon></FavoriteBorderIcon>
          </IconButton>
          <IconButton>
            <ScreenShareOutlinedIcon></ScreenShareOutlinedIcon>
          </IconButton>
          <CopyToClipboard text={queto.queto}>
            <IconButton onClick={CopytoClipBoard}>
              <FileCopyOutlinedIcon className='file__copyicon' />
            </IconButton>
          </CopyToClipboard>
          {text && <span className='pop-span'>{text}</span>}
        </div>
      </div>
    </>
  )
}

export default Queto

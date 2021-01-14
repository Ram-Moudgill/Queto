import React, { useState } from 'react'
import '../css/Queto.css'
import myimg from '../images/img.png'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined'
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined'
import Avatar from '@material-ui/core/avatar'
import { Link } from 'react-router-dom'
const Queto = ({ queto }) => {
  const [popover, setPopover] = useState(false)
  const changePopover = () => {
    if (popover === true) {
      setPopover(false)
    } else {
      setPopover(true)
    }
  }
  return (
    <>
      <div className='queto my-4'>
        <div className='top'>
          <div className='user-date-cont'>
            <Avatar src={myimg}></Avatar>
            {/* <img className='avatar-img' src={myimg} alt='no img' /> */}
            <div className='userdate ml-3'>
              <small></small>
              <br />
              <small>{queto.createdAt}</small>
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
        <div className='post'>{queto.queto}</div>
        <div className='other'>
          <div className='totallikes'>
            <FavoriteIcon className='text-red'></FavoriteIcon> &nbsp;{' '}
            {queto.likes} likes
          </div>
        </div>
        <div className='other'>
          <IconButton>
            <FavoriteBorderIcon></FavoriteBorderIcon>
          </IconButton>
          <IconButton>
            <ScreenShareOutlinedIcon></ScreenShareOutlinedIcon>
          </IconButton>
          <IconButton>
            <FileCopyOutlinedIcon></FileCopyOutlinedIcon>
          </IconButton>
        </div>
      </div>
    </>
  )
}

export default Queto

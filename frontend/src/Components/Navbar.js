import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Navbar.css'
import Profile from '../Components/Profile'
import IconButton from '@material-ui/core/IconButton'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import AddIcon from '@material-ui/icons/Add'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { useSelector } from 'react-redux'
import Avatar from '@material-ui/core/avatar'

const Navbar = ({ brand }) => {
  const [popover, setPopover] = useState(false)
  const changePopover = () => {
    if (popover === true) {
      setPopover(false)
    } else {
      setPopover(true)
    }
  }
  const [position, setposition] = useState(false)
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 40) {
      setposition(true)
    } else {
      setposition(false)
    }
  })
  const { userInfo } = useSelector((state) => state.userLogin)
  return (
    <>
      <div
        className={
          position ? 'row nav__row p-2 m-0 scroll' : 'row nav__row p-2 m-0'
        }
      >
        <div className='col-md-10 col-lg-9 col-sm-12 mx-auto'>
          <nav className='navbar navbar-expand-lg px-0 mx-0'>
            <div className='container-fluid p-0'>
              <NavLink className='navbar-brand' to='/'>
                {brand}
              </NavLink>
              <ul className='navbar-ul mx-auto mb-2 mb-lg-0'>
                <li className='nav-item mx-lg-4'>
                  <NavLink
                    className='nav-link active'
                    aria-current='page'
                    to='/home'
                  >
                    {' '}
                    <IconButton>
                      <HomeOutlinedIcon></HomeOutlinedIcon>{' '}
                    </IconButton>
                  </NavLink>
                </li>
                <li className='nav-item mx-lg-4'>
                  <NavLink
                    className='nav-link active'
                    aria-current='page'
                    to='/'
                  >
                    <IconButton>
                      <FavoriteBorderIcon></FavoriteBorderIcon>{' '}
                    </IconButton>
                  </NavLink>
                </li>
                <li className='nav-item mx-lg-4'>
                  <NavLink className='nav-link' to='/'>
                    <IconButton>
                      <AddIcon></AddIcon>
                    </IconButton>
                  </NavLink>
                </li>
                <li className='nav-item me-5 mx-lg-4'>
                  <NavLink className='nav-link me-3' to='/'>
                    <IconButton>
                      <SearchIcon></SearchIcon>
                    </IconButton>
                  </NavLink>
                </li>
              </ul>
              {userInfo ? (
                <IconButton onClick={changePopover}>
                  <img className='avatar-img' src={userInfo.image} alt='' />
                  {/* <Avatar src={userInfo.image}></Avatar> */}
                  <Profile
                    popover={popover}
                    username={userInfo.username}
                  ></Profile>
                </IconButton>
              ) : (
                <NavLink to='/login' className='btn nav__btn'>
                  <AccountCircleIcon></AccountCircleIcon> Sign In
                </NavLink>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar

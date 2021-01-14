import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Profile.css'
// import '../actions'
import { logout } from '../actions/userActions'
import { useDispatch } from 'react-redux'
const Profile = ({ popover, username }) => {
  const dispatch = useDispatch()
  const userlogout = () => {
    dispatch(logout())
  }
  return (
    <div className={popover ? 'profile' : 'display'}>
      <ul className='profile-ul'>
        <p className='pt-3 px-3'>Signed in as</p>
        <p className='font-weight-bold px-3'>{username}</p>
        <li className='text-left'>
          <NavLink to='/'>Your Profile</NavLink>
        </li>
        <li
          className='text-left'
          style={{
            fontSize: '0.9rem',
            padding: '8px 20px 6px 17px',
            color: 'black',
          }}
          onClick={userlogout}
        >
          Logout
        </li>
      </ul>
    </div>
  )
}

export default Profile

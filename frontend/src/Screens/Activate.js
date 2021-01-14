import React, { useEffect } from 'react'
import Message from '../Components/Message'
import Loading from '../Components/Loading'
import { Link } from 'react-router-dom'
import { activateUser } from '../actions/userActions'
import { useSelector, useDispatch } from 'react-redux'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
const Activate = ({ match, history }) => {
  const { userInfo } = useSelector((state) => state.userLogin)
  const dispatch = useDispatch()
  useEffect(() => {
    if (userInfo) {
      history.push(`/`)
    }
    console.log(match.params.id)
    dispatch(activateUser(match.params.id))
  }, [history, userInfo, dispatch, match])
  const { activeInfo, loading, error } = useSelector(
    (state) => state.userActivation
  )
  return (
    <>
      <div className='row' style={{ paddingTop: '200px' }}>
        <div className='col-md-7 col-sm-10 mx-auto'>
          {loading ? (
            <Loading></Loading>
          ) : error ? (
            <Message variant={'danger'} error={error}></Message>
          ) : (
            <div className='d-flex justify-content-center flex-column'>
              <Message variant={'success'} error={activeInfo}></Message>
              <Link to='/login' className='btn nav__btn'>
                <AccountCircleIcon></AccountCircleIcon> Log In
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Activate

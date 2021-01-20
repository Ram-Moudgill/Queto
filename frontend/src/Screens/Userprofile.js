import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../css/Userprofile.css'
import { Link } from 'react-router-dom'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import IconButton from '@material-ui/core/IconButton'
import Loading from '../Components/Loading'
import Message from '../Components/Message'
import { userQuetos, deleteQueto } from '../actions/quetoActions'
import { Avatar } from '@material-ui/core'
const Userprofile = ({ history }) => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userLogin)
  const userProfile = useSelector((state) => state.userProfile)
  const { deleteQuetoInfo: successDelete } = useSelector(
    (state) => state.deleteQuetoes
  )
  const { error, quetoes, loading } = userProfile

  useEffect(() => {
    console.log('run')
    if (!userInfo) {
      history.push(`/login`)
    }
    dispatch(userQuetos())
  }, [history, userInfo, successDelete, dispatch])
  const deletequeto = (value) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteQueto(value))
    }
  }
  return (
    <>
      <div className='row px-0 m-0 ' style={{ paddingTop: '130px' }}>
        <div className='col-md-10 mx-auto d-flex justify-content-center align-items-center flex-column box__shadow'>
          <div style={{ border: '6px solid #fff', borderRadius: '50%' }}>
            <Avatar src={userInfo && userInfo.image}></Avatar>
          </div>
          <h1 className='text-center username my-4'>
            {userInfo && userInfo.username}
          </h1>
        </div>
      </div>
      <div className='row px-0 m-0 ' style={{ paddingTop: '130px' }}>
        <div className='col-md-10 mx-auto'>
          <div className='row'>
            {loading ? (
              <Loading></Loading>
            ) : error ? (
              <Message error={error} variant={'danger'}></Message>
            ) : (
              quetoes &&
              quetoes.map((queto) => (
                <div
                  key={queto._id}
                  className='col-xl-3 col-md-4 col-md-6 col-sm-8 mx-auto'
                >
                  {/* {popover && (
                    <div
                      // class='modal'
                      className='modal display2'
                      tabindex='-1'
                      role='dialog'
                      aria-labelledby='exampleModalLabel'
                      aria-hidden='true'
                    >
                      <div
                        class='modal-dialog modal-dialog-centered'
                        role='document'
                      >
                        <div class='modal-content'>
                          <div
                            class='modal-body d-flex flex-column'
                            style={{ padding: '0px' }}
                          >
                            <button
                              className='btn btn-block pop-btn'
                              onClick={changePopover}
                            >
                              Edit
                            </button>
                            <button
                              className='btn btn-block pop-btn'
                              onClick={deletequeto(queto._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )} */}
                  <div className='queto my-4'>
                    <div
                      className='top flex-column'
                      style={{ boxShadow: 'none' }}
                    >
                      <div className='pop-overcont d-block ml-auto'>
                        <IconButton
                          onClickCapture={() => deletequeto(queto._id)}
                          className=' ml-auto'
                        >
                          <DeleteOutlinedIcon></DeleteOutlinedIcon>
                        </IconButton>
                        <Link to={`/updatequeto/${queto._id}`}>
                          <IconButton
                            //  onClick={deleteQueto(queto._id)}
                            className=' ml-auto'
                            // onClickCapture={changePopover}
                          >
                            <EditOutlinedIcon></EditOutlinedIcon>
                            {/* <MoreVertIcon className='pr-0'></MoreVertIcon> */}
                          </IconButton>
                        </Link>
                      </div>
                      <div
                        className='post'
                        style={{ height: '-20px', fontSize: '1rem' }}
                      >
                        {queto.queto}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Userprofile

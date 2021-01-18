// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import MoreVertIcon from '@material-ui/icons/MoreVert'
// import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
// import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
// import IconButton from '@material-ui/core/IconButton'
// import { userQuetos } from '../actions/quetoActions'
// const Smallqueto = ({ queto, deletequeto }) => {
//   const [popover, setPopover] = useState(false)
//   const changePopover = (e) => {
//     console.log(popover)

//     if (popover === true) {
//       setPopover(false)
//     } else {
//       setPopover(true)
//       // document.body.style.background = 'rgba(0,0,0,.65)'
//     }
//   }
//   const rundelete = (queto) => {
//     deletequeto(queto)
//   }
//   return (
//     <>
//       <div className='queto my-4'>
//         <div className='top flex-column' style={{ boxShadow: 'none' }}>
//           <div className='pop-overcont d-block ml-auto'>
//             <IconButton className=' ml-auto' >

//               {/* <MoreVertIcon className='ml-auto pr-0'></MoreVertIcon> */}
//             </IconButton>
//             {/* {popover && (
//               <div
//                 // class='modal'
//                 className='modal display2'
//                 tabindex='-1'
//                 role='dialog'
//                 aria-labelledby='exampleModalLabel'
//                 aria-hidden='true'
//               >
//                 <div class='modal-dialog modal-dialog-centered' role='document'>
//                   <div class='modal-content'>
//                     <div
//                       class='modal-body d-flex flex-column'
//                       style={{ padding: '0px' }}
//                     >
//                       <button
//                         className='btn btn-block pop-btn'
//                         onClick={changePopover}
//                       >
//                         Edit
//                       </button>
//                       <button
//                         className='btn btn-block pop-btn'
//                         onClick={rundelete(queto._id)}
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )} */}
//           </div>
//           <div className='post' style={{ height: '-20px', fontSize: '1rem' }}>
//             {queto.queto}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Smallqueto

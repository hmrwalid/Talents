import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteComment } from '../../Redux/action/PostAction'
import formatDate from '../../Util/formDate'

const CommentItem = ( {postId, comment: { _id, text, name,  user, date },}) => {
  const authId = useSelector((state)=>state.auth.user._id)
  const postUser = useSelector((state)=>state.post.posts.user)

 const dispatch= useDispatch()

  return (
    <div>
       <div className='post bg-white p-1 my-1'>
    <div>
      <Link to={`/profile/${user}`}>
        

        <h4>{name}</h4>
      </Link>
    </div>

    <div>
      <p className='my-1'>{text}</p>

      <p className='post-date'>Posted on {formatDate(date)}</p>
        {authId=== postUser?  
         (<>
         <button
          onClick={(e) =>dispatch(deleteComment(postId, _id))}
          type='button'
          className='btn btn-danger'
        >
          <i className='fas fa-times' />
        </button>
         </>):
        (<>
        </>)}
        
      
    </div>
  </div>
    </div>
  )
}

export default CommentItem
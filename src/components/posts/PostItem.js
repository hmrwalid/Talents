import React from 'react'
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addLike, deletePost, removeLike, getPost } from '../../Redux/action/PostAction';
import formatDate from '../../Util/formDate'

const PostItem = ({post: { _id, text, name,  user, likes, comments, date },

  showActions}) => {
    
   const dispatch= useDispatch();
   const loading = useSelector((state)=>state.post.loading)
   const auth = useSelector((state)=>state.auth)
  return (
    <div>
  <div className='post bg-white my-1 p-1'>
    <div>
      <Link to={`/profile/${user}`}>
        <h4>{name}</h4>
      </Link>
    </div>

    <div>
      <p className='my-1'>{text}</p>

      <p className='post-date'>Posted on {formatDate(date)}</p>

      {showActions && (
        <>
          <button
            onClick={(e) => dispatch(addLike(_id)) }
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-thumbs-up' />{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>

          <button
            onClick={(e) => dispatch(removeLike(_id))}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-thumbs-down' />
          </button>

          <Link to={`/posts/${_id}`} >
          <button className='btn btn-primary' onClick={console.log(dispatch(getPost(_id)))}   > discussion</button>
            {comments.length > 0 && (
              <span className='comment-count'>{comments.length}</span>
            )}
          </Link>

          {!loading && user === auth.user._id && (
            <button
              onClick={(e) => dispatch(deletePost(_id))}
              type='button'
              className='btn btn-danger'
            >
              <i className='fas fa-times' />
            </button>
      
          
          )} 
        </>
       )} 
    </div>
  </div>

    </div>
  )
}
PostItem.defaultProps = {
  showActions: true,
};
export default PostItem
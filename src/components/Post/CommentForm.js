import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addComment } from '../../Redux/action/PostAction';

const CommentForm = ({postId}) => {
  const [text, setText] = useState('');
   const dispatch = useDispatch()
  const handleOnSubmit = (e) => {
    e.preventDefault();
   dispatch( addComment(postId, { text }))
    setText('');
  };
  return (
    <div className='post-form'>
    <div className='post-form-header bg-primary'>
      <h3>Leave a Comment</h3>
    </div>

    <form className='form my-1' onSubmit={handleOnSubmit}>
      <textarea
        name='text'
        cols='30'
        rows='5'
        placeholder='Comment on this Post'
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />

      <input type='submit' value='Submit' className='btn btn-dark my-1' />
    </form>
  </div>
  )
}

export default CommentForm
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addPost } from '../../Redux/action/PostAction';

const PostForm = () => {
  const [text, setText] = useState('');
   const dispatch = useDispatch()
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ text }));
    setText('');
  };
  return (
    <div className='post-form'>
    <div className='post-form-header bg-primary'>
      <h3>Say Something...</h3>
    </div>

    <form className='form my-1' onSubmit={handleOnSubmit}>
      <textarea
        name='text'
        cols='30'
        rows='5'
        placeholder='Create a Post'
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />

      <input type='submit' value='Submit' className='btn btn-dark my-1' />
    </form>
  </div>  )
}

export default PostForm
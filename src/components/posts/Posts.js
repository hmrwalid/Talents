import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../Redux/action/PostAction'
import PostForm from './PostForm'
import PostItem from './PostItem'

const Posts = () => {
  const posts = useSelector((state)=>state.post.posts)
const  dispatch= useDispatch()
useEffect(()=>{
 dispatch(getPosts())
},[getPosts])
  return (
    <div className='pst'>
        <section className='container'>
      <h1 className='large text-primary'>Posts</h1>

      <p className='lead'>
        <i className='fas fa-heart'></i> Welcome Golden Talent FootBaller Community
      </p>

      <PostForm />

      <div className='posts'>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </section>
    </div>
  )
}

export default Posts
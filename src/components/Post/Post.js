import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getPost } from '../../Redux/action/PostAction'
import PostItem from '../posts/PostItem'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'


 

const Post = () => {
  const dispatch =useDispatch()
  const post = useSelector((state)=>state.post.post)
  const loading = useSelector((state)=>state.post.loading)
  const {id} = useParams();


  useEffect(() => {
    dispatch(getPost(id))
  },[getPost]);


  return (
    <div>
      <section className='container'>
      <Link to='/posts' className='btn'>
        Back to Posts
      </Link>

      <PostItem post={post} showActions={false} />

      <CommentForm  postId={post._id} />

      <div className='comments'>
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment}  postId={post._id} />
        ))}
      </div>
    </section>
    </div>
  )
}

export default Post

import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getPost } from '../../Redux/action/PostAction'
import PostItem from '../posts/PostItem'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

const Post = () => {
  const post = useSelector((state)=>state.post.posts)
  console.log(post)
  const loading = useSelector((state)=>state.post.loading)
  const id =useSelector((state)=>state.post.posts._id)
  console.log(id)
  useEffect(() => {
    getPost(id);
  }, [getPost, id]);
  return (
    <div style={{marginTop:"8erm"}}>
      {loading || post === null ? (
        <div>
          <section className='container'>
      <Link to='/posts' className='btn'>
        Back to Posts
      </Link>

      <PostItem post={post} showActions={false} />

      {/* <CommentForm postId={post._id} /> */}

      <div className='comments'>
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </section>
    <Spinner />
    </div>
  ) : (
    <section className='container'>
      <Link to='/posts' className='btn'>
        Back to Posts
      </Link>

      <PostItem post={post} showActions={false} />

      <CommentForm postId={post._id} />

      <div className='comments'>
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </section>
  )}
    </div>
  )
}

export default Post
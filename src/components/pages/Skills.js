import { video } from '@cloudinary/url-gen/qualifiers/source'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import ListVideos from './ListVideos'
const Skills = () => {

  const user = useSelector(state => state.auth)
  const [title, setTitle] = useState("")

  const [url, setUrl] = useState("")
  const [videos, setVideo] = useState([])

  const addVideos =(video)=>{
    setVideo([...videos, video])
  }
  const add =()=>{
    addVideos({
      url,
      title
    })
    setUrl('')
    setTitle('')
  }

  return (
    <div  style={{ marginTop:"9rem"}}>
      <div className='test'>
      <h1 className='h1'>Skills video tutorial</h1>

      </div>
        {user.user.role === "ADMIN"? (<div className='url'>
          <input className='inputUrl' type="text" placeholder='URL' value={url} 
          onChange={event=>{setUrl(event.target.value)}} />
          <input className='inputUrl' type="text" placeholder='title' value={title} 
          onChange={event=>{setTitle(event.target.value)}} />
          <button className='btUrl' onClick={add}>add video</button>
          <div> {videos.map((video)=><ListVideos item ={video}/>)}</div>
           
        </div>):(<></>)}
         <div className='videoSkill'>
         <h4 className='h4'>10 Dribbling Moves To Beat Defenders <br/> Step By Step Dribbling Skills Tutorial</h4>
         <div className='Vds'>
         <ReactPlayer controls  url="https://www.youtube.com/watch?v=_uuqsGCiM9I&ab_channel=7mlc"/> 
         </div>
         </div>

         <div className='videoSkill'>
         <h4 className='h4'>10 BEST 1v1 SKILLS in Soccer/Football</h4>
         <div className='Vds'>
         <ReactPlayer controls  url="https://youtu.be/WVKSp2tynPk"/> 
         </div>
         </div>
    </div>
  )
}

export default Skills
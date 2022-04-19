import React from 'react'
import ReactPlayer from 'react-player'
const Skills = () => {
  return (
    <div style={{ marginTop:"9rem"}}>
      <div className='test'>
      <h1 className='h1'>Skills videos tutorial</h1>

      </div>
        
         <div className='video'>
         <h4 className='h4'>10 Dribbling Moves To Beat Defenders <br/> Step By Step Dribbling Skills Tutorial</h4>
         <ReactPlayer controls  url="https://www.youtube.com/watch?v=_uuqsGCiM9I&ab_channel=7mlc"/> 
         </div>
         <div className='video'>
         <h4 className='h4'>10 Dribbling Moves To Beat Defenders <br/> Step By Step Dribbling Skills Tutorial</h4>
         <ReactPlayer controls  url="https://www.youtube.com/watch?v=_uuqsGCiM9I&ab_channel=7mlc"/> 
         </div>
         <div className='video'>
         <h4 className='h4'>10 Dribbling Moves To Beat Defenders <br/> Step By Step Dribbling Skills Tutorial</h4>
         <ReactPlayer controls  url="https://www.youtube.com/watch?v=_uuqsGCiM9I&ab_channel=7mlc"/> 
         </div>
    </div>
  )
}

export default Skills
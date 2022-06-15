import React from 'react'
import ReactPlayer from 'react-player'

const ListVideos = ({item}) => {
  return (
                 <div className='videoSkill'>
         <h4 className='h4'>{item.title}</h4>
         <div className='Vds'>
         <ReactPlayer controls  url={item.url}/> 
         </div>
         </div>
  )
}

export default ListVideos
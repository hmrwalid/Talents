import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import ImageItem from './ImageItem';

const ProfilCardItems = ({image}) => {
  
  return (
    <div style={{margin:"5px"}}>
       <div className="flip-container">
        <div className="flip-inner-container">
          <div className="flip-front">
             <img src={image.avatar}/>
          </div>
          <div className="flip-back">
            <div className="profile-image">
            <img src={image.avatar}/>

            
          <button  >
            go to profile
          </button>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default ProfilCardItems
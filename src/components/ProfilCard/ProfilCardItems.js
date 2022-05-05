import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCurrentProfile, getProfilById } from '../../Redux/action/ActionProfil'
import { getImage } from '../../Redux/action/UploadFileAction'

const ProfilCardItems = ({image}) => {

const profiles = useSelector((state)=>state.profile.profiles)
const imageUser = image.user
const profile =profiles.filter(profile=> profile.user._id=== imageUser)[0]

      const dispatch = useDispatch()
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
           <h3>{profile.name}</h3>
           <p>{profile.Favorite_position}</p>

           <Link to={`/user/${image._id}` }>
          <button onClick={()=> {dispatch(getImage(image._id))}}>
            go to profile
          </button>
          </Link>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default ProfilCardItems
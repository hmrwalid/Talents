import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteAccount, getProfilById } from '../../Redux/action/ActionProfil'
import { getImage } from '../../Redux/action/UploadFileAction'

const ProfilesUsers = () => {

    const image = useSelector((state)=>state.uploadFile.image)
    
   

  return (
    <div className='body'>
    <div className='logContainer'>
    <div className='login'>

       <h1>Player</h1>
                <hr/>

    </div>
    <div className="pic">
            <img src={image.avatar}/>
        </div>
    </div>
    </div>
  )
}

export default ProfilesUsers
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfiles } from '../../Redux/action/ActionProfil'

const ProfilesUsers = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch( getProfiles())
   }, [])

    const image = useSelector((state)=>state.uploadFile.image)
    const profiles = useSelector((state)=>state.profile.profiles)
    const imageUser = image.user
    var profile =profiles.filter(profile=> profile.user._id=== imageUser)[0]
    console.log("imageUser", image)
    console.log('profile._id',profile._id)

  return (
    <div className='body'>
    <div className='logContainer'>
    <div className='login'> 
    {profile !== null ? (
        <div>
           <h1>{profiles.filter(el=> el.user._id=== imageUser)[0].name}</h1>
                <hr/>
        </div>
      ) : (
        <div >
          <h1>player</h1>
        </div>
      )}
      

    </div>
    <div className="pic">
            <img src={image.avatar}/>
        </div>
    </div>
    </div>
  )
}

export default ProfilesUsers
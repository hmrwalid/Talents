import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
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
    // console.log("imageUser", image)
    // console.log('profile._id',profile._id)

  return (
    <div  style={{marginTop :"7rem"}}>
    
    {profile !== undefined ? (
        <div>
            <div className='bodyProfile'>
  <div>
 <figure className="snip0045 red">
   <figcaption>
     <h2><strong className='spPro' style={{margin:"3px"}}>{profile.name}</strong> <br/>{profile.age} years</h2>
     <ul>
     <li >Weight : <strong>{profile.weight}</strong></li>
     <li >heigth : <strong>{profile.height}</strong></li>
     <li >stronger Foot : <strong>{profile.stronger_Foot}</strong></li>
     <li > Positon : <strong> {profile.Favorite_position}</strong></li>

     </ul>            
       <div className='video'>
  <ReactPlayer controls  url="https://www.youtube.com/watch?v=_uuqsGCiM9I&ab_channel=7mlc"/> 
  </div>
  <div class="icons">
<span className='spPro'><i class="ion-ios-home"></i>  {profile.city}</span>
<span className='spPro'><i class="ion-ios-email"></i>  {profile.email}</span>
<span className='spPro'><i class="ion-ios-telephone"></i>  {profile.tel}</span>
</div>  
   </figcaption>
   <div>       
        <img src={image.avatar} alt="sample7"  /> 
</div>
 </figure>

</div>

          </div>
        </div>
      ) : (
        <div >
          <h1>player</h1>
        </div>
      )}
      

   
    </div>
  )
}

export default ProfilesUsers
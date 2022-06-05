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
    

  return (
    <div  >
    
    {profile !== undefined ? (
         <div style={{marginTop :"8rem"}} className= "puser">
         <div className="row">
           <div className="col-lg-7">
             <center>
               <div className="titlep" > <b>{profile.name}</b> </div>
             </center>
             <div className="details">
               <table className="table bio">
                 <tbody>
                   <tr>
                   <td><b>AGE</b></td>
                     <td><b>{profile.age} years</b></td>
                   </tr>
                   <tr>
                     <td><b>WEIGHT</b></td>
                     <td><b>{profile.weight}</b></td>
                   </tr>
                   <tr>
                   <td><b>HEIGHT</b></td>
                     <td><b>{profile.height}</b></td>
                   </tr>
                   <tr>
                      <td><b>stronger Foot</b></td>
                     <td><b>{profile.stronger_Foot}</b></td>
                   </tr>
                   <tr>
                   <td><b>POSITION</b></td>
                     <td><b>{profile.Favorite_position}</b></td>
                   </tr>
                   <tr>
                   <td><b>ADDRESS</b></td>
                     <td><b>{profile.city}</b></td>
                     
                   </tr>
                 </tbody></table> <br /><br />
               
             </div>
             <ReactPlayer  controls  url="https://www.youtube.com/watch?v=_uuqsGCiM9I&ab_channel=7mlc"/> 
       
           </div>
           <div className="col-lg-5"> 
           <img className="messi rounded-circle mt-5" src={image.avatar}/>
             
           </div>
           <div class="icons">
<span className='spPro'><i class="ion-ios-home"></i>  {profile.city}</span>
<span className='spPro'><i class="ion-ios-email"></i>  {profile.email}</span>
<span className='spPro'><i class="ion-ios-telephone"></i>  {profile.tel}</span>
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


  
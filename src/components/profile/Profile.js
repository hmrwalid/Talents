


import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteAccount, getCurrentProfile, getProfilById } from '../../Redux/action/ActionProfil'
import { getMyImage } from '../../Redux/action/UploadFileAction'


const Profile = () => {


  const dispatch = useDispatch()
  const profile= useSelector((state)=>state.profile.profile)
  const image = useSelector((state)=>state.uploadFile.image)
  
useEffect(() => {
  dispatch(getCurrentProfile());
    dispatch(getMyImage())
}, [getCurrentProfile, getMyImage]);


    
return (

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
<div className='butt'>
  <Link to='/create-profile'>
  <button className='btn btn-primary my-1' style={{ backgroundColor: "red"}}  onClick={deleteAccount()}>
  delete Profile</button>

  </Link>
<Link  to='/edit-profile' className='btn btn-primary my-1' style={{ backgroundColor: "blue"}}>
            Edit your Profile
          </Link>
          </div>
          </div>
      

)
}

export default Profile
{/* <div className="card" >
      
<h1 className='lead' style={{color:"#b88b0f"}}>
 Basic Info
</h1>
     <div className='cardp'>
   <div className='prf'>
      <p>City</p>
     <span className='spPro'>
    </span></div>
    <div className='prf'>
      <p>Age</p>
     <span className='spPro'>
      {profile.age}
    </span></div>
    <div className='prf'>
      <p>Height</p>
     <span className='spPro'>
      {profile.height}
    </span></div>
    <div className='prf'>
      <p>Weight</p>
     <span className='spPro'>
      {profile.weight}
    </span></div>
    <div className='prf'>
      <p>Stronger Foot</p>
     <span className='spPro'>
      
    </span></div>
    <div className='prf'>
      <p>Favorite position</p>
     <span className='spPro'>
     
    </span></div>
      <Link to='/edit-profile'> <button className='btn'>Edit</button></Link>
      <Link to='/create-profile'> <button className='btn' onClick={deleteAccount()}>delete</button></Link>

 </div>
</div> */}

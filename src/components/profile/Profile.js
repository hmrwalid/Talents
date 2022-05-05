


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { deleteAccount, getCurrentProfile, getProfilById } from '../../Redux/action/ActionProfil'
import { getImage, getImages, getMyImage } from '../../Redux/action/UploadFileAction'


const Profile = () => {


  const dispatch = useDispatch()
  const profile= useSelector((state)=>state.profile.profile)
  const image = useSelector((state)=>state.uploadFile.image)
  
useEffect(() => {
  dispatch(getCurrentProfile());
    dispatch(getMyImage())
}, [getCurrentProfile, getMyImage]);


    
return (

  <div className='body'>
  <div className='logContainer'>
  <div className='login'>

     <h1>{profile.name}</h1>
              <hr/>
              
              <div className='prf'>
      <p>City</p>
     <span>
      {profile.city}
    </span></div>
    <div className='prf'>
      <p>Age</p>
     <span>
      {profile.age}
    </span></div>
    <div className='prf'>
      <p>Height</p>
     <span>
      {profile.height}
    </span></div>
    <div className='prf'>
      <p>Weight</p>
     <span>
      {profile.weight}
    </span></div>
    <div className='prf'>
      <p>Stronger Foot</p>
     <span>
      {profile.stronger_Foot}
    </span></div>
    <div className='prf'>
      <p>Favorite position</p>
     <span>
      {profile.Favorite_position}
    </span></div>
      <Link to='/edit-profile'> <button className='btn'>Edit</button></Link>
      <Link to='/create-profile'> <button className='btn' onClick={deleteAccount()}>delete</button></Link>

  </div>
  <div className="pic">
          <img src={image.avatar}/>
      </div>
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
     <span>
      {profile.city}
    </span></div>
    <div className='prf'>
      <p>Age</p>
     <span>
      {profile.age}
    </span></div>
    <div className='prf'>
      <p>Height</p>
     <span>
      {profile.height}
    </span></div>
    <div className='prf'>
      <p>Weight</p>
     <span>
      {profile.weight}
    </span></div>
    <div className='prf'>
      <p>Stronger Foot</p>
     <span>
      {profile.stronger_Foot}
    </span></div>
    <div className='prf'>
      <p>Favorite position</p>
     <span>
      {profile.Favorite_position}
    </span></div>
      <Link to='/edit-profile'> <button className='btn'>Edit</button></Link>
      <Link to='/create-profile'> <button className='btn' onClick={deleteAccount()}>delete</button></Link>

 </div>
</div> */}




import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteAccount, getCurrentProfile, getProfilById } from '../../Redux/action/ActionProfil'
import UploaFile from './UploaFile'


const Profile = () => {
  
  const dispatch = useDispatch()
  const profile= useSelector((state)=>state.profile.profile)
const loading = useSelector((state)=>state.post.loading)


useEffect(() => {
  dispatch(getCurrentProfile());
}, [getCurrentProfile]);
//   // uoload image


    
return (

         <div className="card" >
      
      <h1 className='lead' style={{color:"#b88b0f"}}>
       Basic Info
    </h1>
       <img src=''/>
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
       </div>
     </div>
     
      

)
}

export default Profile
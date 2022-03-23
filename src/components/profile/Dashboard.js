import React from 'react'
import { useSelector } from 'react-redux'
import {  Link } from 'react-router-dom'
import Profile from './Profile'

const Dashboard = () => {
  const user= useSelector((state)=>state.auth.user)
  console.log(user.role)
  return (
    <div> 
      <h5>welcome {user.name}</h5>

      {user.role=== "USER" ? (<>
        <Profile/>
      
        </>):(<>
        <Link to='/admin'><h6>Check the users</h6> </Link></>)}
    </div>
  )
}

export default Dashboard
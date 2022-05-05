import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Link, useParams } from 'react-router-dom'
import { deleteAccount, getCurrentProfile } from '../../Redux/action/ActionProfil'
import Profiles from '../Admin/Profiles'

import DashboardActions from './DashboardActions'

const Dashboard = () => {
  const dispatch= useDispatch()
  const user= useSelector((state)=>state.auth.user)
  const profile= useSelector((state)=>state.profile.profile)
  const role = useSelector((state)=> state.auth.user.role)
  console.log(role)
  const post = useSelector((state)=>state.post.post)
  const loading = useSelector((state)=>state.post.loading)
  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [getCurrentProfile]);
 
 
  return (
    <div   style={{display:"flex", justifyContent:"column",marginTop:"6rem", background: "#000",   color:"white"  }}> 
     
     
     <section className='container'>
      <h1 className='large'  style={{color:'#fbba07'}}>Dashboard</h1>

      <p className='lead'  style={{color:'white'}}>
        <i className='fas fa-user' style={{color:'white'}} />  { user.name}
      </p>
        
        {role === "ADMIN"? (<>
          <Profiles/>
         </>):
        (<>
          {profile !== null ? (
        <div style={{display:"flex", justifyContent:"center",}}>

          <DashboardActions />
        </div>
      ) : (
        <div >
          <p style={{color:'white'}}> You have not yet setup a profile, please add some info</p>

          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </div>
      )}
        </>) }
    
    </section>
    
    </div>
  )
}

export default Dashboard



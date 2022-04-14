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


// {user.role=== "USER"?  (<>
//   <div className='dshBody'>
//     <div className="wrapper">
//     <h1 className='h1_dsh'>-- Welcome {user.name} --</h1>
//     <div className="about-section">
//       <img className='img_dsh' src="/prof.jpg" />
//       <p className='p_dsh'>
//         Create your profile to hear from us about our special events and programs.
//         <br />
//       <Link to='/profile'> <button className='btn_dsh' onClick={()=>dispatch (toggleFalse())}>Create my profile</button></Link>
//       </p>
//     </div>  
//     </div> 
//     </div>
//     </>): !profile.length === 0? (<>
//       <div style={{display :"flex" , margin:"22px" }}> 
// <Card>
//   <Card.Content>
//     <Image
//       floated='right'
//       size='mini'
//       src='https://rekrutmen.unisba.ac.id/assets/images/user.png'
//     />
//     <Card.Header>  {profile.name}</Card.Header>
//     <Card.Meta> Age: {profile.age}</Card.Meta>
//     <Card.Meta> Hieght: {profile.height}</Card.Meta>
//     <Card.Meta>Weight: {profile.weight}</Card.Meta>

//     <Card.Description>
//     Stronger_Foot :  <strong>{profile.stronger_Foot }</strong>
//     </Card.Description>
//   </Card.Content>
//   <Card.Content extra>
//     <div className='ui two buttons'>
//       <Link to= {`/profile/${profile._id}`} >
//       <Button basic color='green' onClick={()=>{dispatch(toggleTrue()); dispatch(getUser(profile._id))}}>
//         Edit
//       </Button>
//       </Link>
//       <Button basic color='red' onClick={()=>dispatch(deleteUser(profile._id))}>
//         Delete
//       </Button>
//     </div>
//   </Card.Content>
// </Card>
// </div>
//     </>):
//     (<>
//     <Link to='/admin'><h6>Check the users</h6> </Link></>)}
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
  dispatch(getMyImage())

  dispatch(getCurrentProfile());
}, [getCurrentProfile, getMyImage]);


    
return (

  
  <div className="main">
    {profile && image? (<>
      <div className="row">
    <div className="col-lg-7">
      <center>
        <div className="titlep" > <b className="myProf">{profile.name}</b> </div>
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
      <ReactPlayer  controls  url={profile.video}/> 

    </div>
    <div className="col-lg-5"> 
    <img className="messi rounded-circle mt-5" src={image.avatar}/>
      
    </div>
    <div class="icons">
<span className='spPro'><i class="ion-ios-home"></i>  {profile.city}</span>
<span className='spPro'><i class="ion-ios-email"></i>  {profile.email}</span>
<span className='spPro'><i class="ion-ios-telephone"></i>  {profile.tel}</span>
</div>
    <div className='butt'>
  <Link to='/singup'>
  <button className='btn btn-primary my-1' style={{ backgroundColor: "red"}}  onClick={deleteAccount()}>
  delete Profile</button>

  </Link>
<Link  to='/edit-profile' className='btn btn-primary my-1' style={{ backgroundColor: "blue"}}>
            Edit your Profile
          </Link>
          </div>
  </div>
    
    </>):(<>
    
    <div >
          <p style={{color:'white'}}> You have not yet setup a profile, please add some info</p>

          <Link to='/create-profile' className='btn btn-primary my-1'>
            incomplement infos
          </Link>
        </div></>)}
  
</div>
      

)
}

export default Profile


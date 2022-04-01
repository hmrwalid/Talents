import axios from 'axios'
import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteAccount, getCurrentProfile } from '../../Redux/action/ActionProfil'
import Upload from './Upload'

const Profile = () => {
    const dispatch = useDispatch()
    const profile= useSelector((state)=>state.profile.profile)
  const loading = useSelector((state)=>state.post.loading)
  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [getCurrentProfile]);
  // upload image and video
//   const [image, setImage] = useState('')
//  const uploadImage =()=>{
//     const formData = new FormData()
//     formData.append("file", image)
//     formData.append("upload_preset", "e9qgdmbj")
//     Axios.post("https://api.cloudinary.com/v1_1/walid1996/image/upload", formData).then((response)=>{
//         console.log(response)
//     })

//     }
 
  return (

               <div className="card" style={{marginTop:'20px' , width:"500px" }}>
        <div className="card-image">
            <figure>
            <Upload />
           </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{profile.name}</p>
              <p className="subtitle is-6">{profile.email}</p>
            </div>
          </div>
          <div className="content">
           <span>Favorite position :{profile.Favorite_position}</span>

          </div>
          <div className="card">
        <footer className="card-footer" style={{display:"flex", justifyContent:"space-between"}}>
          <button className="card-footer-item btn-primary">Edit</button>
          <button className="card-footer-item  btn-danger"  onClick={() => dispatch(deleteAccount())}>Delete</button>
        </footer>
      </div>
        </div>
        
      </div>

  )
}

export default Profile

{/* <div className="card">
        <footer className="card-footer" style={{display:"flex", justifyContent:"space-between"}}>
        <Link to='/edit-profile'><button style={{width :"100%"}} className="card-footer-item btn-primary">Edit</button></Link>  
          <button style={{width :"40%"}} className="card-footer-item btn-danger"  onClick={() => dispatch(deleteAccount())}>Delete</button>
        </footer>
      </div> */}
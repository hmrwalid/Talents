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


  // useEffect(() => {
  //   dispatch(getCurrentProfile());
  // }, [getCurrentProfile]);
//   // uoload image

 const [file, setFile] = useState("")
      const onChangeInput=(event)=>{
         const file = event.target.files[0];
         if(file && event.target.files.length>0){
          setFile(file)
         }
      }
 const send = async(e) =>{
      const data = new FormData()
        data.append("image", file)
        await axios.post("http://localhost:5000/upload", data)
        .then((res)=>{
          console.log(res)
        })
        .catch((err)=>{
          console.log(err)
        })
         alert(URL.createObjectURL(file) )
      }
  return (

               <div className="card" style={{marginTop:'20px' , width:"500px" }}>
          <form  >
             <input type='file' name='image' onChange={onChangeInput}/>
          </form>
          <button type='submit' onClick={send}>Upload</button>
      {file && (<>  <img src={URL.createObjectURL(file)} alt="profile"  /> </>) }
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
        <Link to='/edit-profile'><button className="card-footer-item btn-primary">Edit</button></Link>
          <button className="card-footer-item  btn-danger"  onClick={() => dispatch(deleteAccount())}>Delete</button>
        </footer>
      </div>
        </div>
        
      </div>

  )
}

export default Profile


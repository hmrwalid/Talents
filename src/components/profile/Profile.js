import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CreateProfile, editProfile } from '../../Redux/action/profilAction';
import { EDIT_USER } from '../../Redux/typeAction';
import Inputs from '../priveRoute/Input';

const Profile = ({userID}) => {
  const dispatch = useDispatch()
  const errors = useSelector(state=>state.errors)
  const userPr= useSelector((state)=>state.auth.user)

  const profile = useSelector((state=> state.profiles.profiles))
  const [user,setUser]= useState({name:"", email :"",
  age:"",
  height :"",
  weight :"",
  stronger_Foot :"",
  image :""
})
  const edit = useSelector((state)=> state.editReducer.edit)
  
  useEffect(()=>{
      edit? setUser(profile): setUser({name:"", email :"",
      age:"",
      height :"",
      weight :"",
      stronger_Foot :"",
      image :""
    })
  },[profile, edit])

  
  const handleUser =()=>{
    if (!edit){
      dispatch (CreateProfile(user))
    }else{
      dispatch(editProfile(userPr, user))
    }
      
  }
  const onChangeHandler= (e)=>{
      e.preventDefault ()
      setUser({...user,[e.target.name]:e.target.value})
  }

  return (
    <div className='bodyProf'>
       
    <div className="containerProf">
    <div className="create">
      <form className='form'  >
        <h1>Create your profile</h1>
        <hr />
        
        <Inputs
                name="name"
                label="Name"
                type="text"
                icon="fa-solid fa-at"
                value={user.name} 
                onChangeHandler={onChangeHandler}
                errors={errors.name}
              />
               <Inputs
                name="email"
                label="Email"
                type="text"
                icon="fa-solid fa-at"
                value={user.email} 
                onChangeHandler={onChangeHandler}
                errors={errors.email}
              />
        <Inputs
                name="age"
                label="Age"
                type="text"
                icon="fa-solid fa-at"
                value={user.age} 
                onChangeHandler={onChangeHandler}
                errors={errors.age}
              />
              <Inputs
                name="height"
                label="Heigth"
                type="text"
                value={user.height} 
                icon="fa-solid fa-at"
                onChangeHandler={onChangeHandler}
                errors={errors.height}
              />
                <Inputs
                name="weight"
                label="Weigth"
                type="text"
                value={user.weight} 
                icon="fa-solid fa-at"
                onChangeHandler={onChangeHandler}
                errors={errors.weight}
              />
              <Inputs
                name="stronger_Foot"
                label="Stronger_Foot"
                type="text"
                value={user.stronger_Foot} 
                icon="fa-solid fa-at"
                onChangeHandler={onChangeHandler}
                errors={errors.stronger_Foot}
              />
               
 
  
  
  <label>import image</label>
  <input className="input" type="file"  />
  
  <Link to="/dashbord"> <button className='btnn'  >Save</button> </Link>

      </form>
    </div>
    
  </div> 
  </div>  
       
  )
}

export default Profile

{/* <div className='bodyProf'>
<div>
<div className="containerPro">
<label htmlFor="show" className="close-btn" title="close">×</label>
<h1>Welcome</h1>
<form action="#">
  <label>Name</label>
  <input className="input" type="text" />
  <label>Age</label>
  <input className="input" type="text" />
  <label>Heigth</label>
  <input className="input" type="text" />
  <label>Weigth</label>
  <input className="input" type="text" />
  <label>Stranger foot</label>
  <input className="input" type="text" />
  <label>import image</label>
  <input className="input" type="file" />
  <div className="pic">
<img src="/pic/Meeting.png" />
</div>
  <button>Save</button>
</form>
</div>
</div>

</div> */}


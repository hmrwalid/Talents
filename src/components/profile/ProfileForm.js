import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useMatch, useNavigate } from 'react-router-dom'
import { createProfile, getCurrentProfile } from '../../Redux/action/ActionProfil'
import { getMyImage } from '../../Redux/action/UploadFileAction'
import UploadImage from './UploaImage'

const ProfileForm = () => {
    const profile = useSelector((state)=>state.profile.profile)
    const loading = useSelector((state)=>state.profile.loading)
    const photo = useSelector((state)=>state.uploadFile.image)

    const dispatch =useDispatch()
    const initialState = {
        name: '',
        email: '',
        age: '',
        height: '',
        weight: '',
        stronger_Foot: '',
        image: '',
        video: '',
        bio: '',
        address: '',
        tel: '',
        city: '',
        Favorite_position: ''
      };
      const [formData, setFormData] = useState(initialState);
      const creatingProfile = useMatch('/create-profile');
      const navigate = useNavigate();
      useEffect(() => {
        // if there is no profile, attempt to fetch one
        if (!profile){
          dispatch(getCurrentProfile())
          dispatch(getMyImage())
        } 
    
        // if we finished loading and we do have a profile
        // then build our profileData
        if (!loading && profile) {
          const profileData = { ...initialState };
          for (const key in profile) {
            if (key in profileData) profileData[key] = profile[key];
          }
          // set local state with the profileData
          setFormData(profileData);
        }
      }, [loading, getCurrentProfile, profile]);

      const {
        name,
        email,
        age,
        height ,
        weight ,
        stronger_Foot ,
        image,
        video,
        bio,
        address,
        tel,
        city,
        Favorite_position
    } = formData;
    
      const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const onSubmit = (e) => {
        e.preventDefault();
       dispatch( createProfile(formData, navigate, profile ? true : false));
      };



  return (
    <div  style={{marginTop: "9rem"}}>
     <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
           <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              {profile  && photo ?(<>
                <img className="rounded-circle mt-5" src={photo.avatar} width="200px" />
              <span className="font-weight-bold">{profile.name}</span>
              <span className="text-black-50">{profile.Favorite_position}</span>
              <span> </span></>):
              
              (<> <UploadImage/></>)}
              
              </div>
          </div> 
          <div className="col-md-5 border-right" onSubmit={onSubmit}> 
            <div className="p-3 py-5"> 
            <div className="d-flex justify-content-between align-items-center mb-3"> 
                <h4 className="text-right">Profile Settings</h4> 
                </div> 
              <div className="row mt-2"> 
              <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input type="text" className="form-control" placeholder="name" value={name} 
                onChange={onChange} name='name' /></div>
                <div className="col-md-6">
                  <label className="labels">Email</label>
                  <input type="email" className="form-control"  
                   name="email"
                   placeholder="Email"
                   value={email} 
                   onChange={onChange} /></div> 
              </div> 
              <div className="row mt-3"> 
                <div className="col-md-12">
                  <label className="labels">Age</label>
                  <input type="number" className="form-control"  min="0"
                   name="age"
                   placeholder="Age"
                   value={age} 
                   onChange={onChange}/>
                </div>
                <div className="col-md-12">
                  <label className="labels">Height</label>
                  <input type="text" className="form-control" placeholder="height Cm" 
                   name="height"
                   value={height} 
                   onChange={onChange} />
                </div> 
                <div className="col-md-12">
                  <label className="labels">weight</label>
                  <input type="text" className="form-control" placeholder="weight Kg" 
                   name="weight"
                   value={weight} 
                   onChange={onChange} />
                </div> 
                <div className="col-md-12"><label className="labels">Tel</label>
                  <input type="text" className="form-control" placeholder="+ --- -- --- ---" 
                  name="tel"
                  value={tel} 
                  icon="fa-solid fa-at"
                  onChange={onChange} />
                </div> 
                <div className="col-md-12"><label className="labels">City</label>
                  <input type="text" className="form-control" name="city"
                placeholder="city"
                value={city} 
                onChange={onChange}  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address</label>
                  <input type="text" className="form-control" placeholder="Address"
                   name="address"
                   value={address} 
                   onChange={onChange}  />
                </div> 
              </div>
              <div className="row mt-3"> 
                <div className="col-md-6">
                <small className='form-text'>
            Give us an idea of your stronger Foot
          </small>
                  <select className="form-control select" 
                   name='stronger_Foot' value={stronger_Foot} onChange={onChange} >
                  <option value='Left'>Left</option>
            <option value='Right'>Right</option>
            <option value='both'>both</option>
            </select>
                </div> 
                <div className="col-md-6">
                <small className='form-text'>
            Give us an idea of your Favorite position
          </small>
          <select className='form-control select' name='Favorite_position' value={Favorite_position} onChange={onChange}>
            <option> Select your Favorite position</option>
            <option value='Goalkeeper (GK)'>Goalkeeper (GK) </option>
            <option value='Centre-Back (CB)'>Centre-Back (CB)</option>
            <option value='right-back (RB)'>right-back (RB)</option>
            <option value='left-back(LB)'>left-back(LB)</option>
            <option value='right wing-back(RWB)'>right wing-back(RWB)</option>
            <option value='left wing-back(LWB)'>left wing-back(LWB)</option>
            <option value='defensive midfielder(DM)'> defensive midfielder(DM)</option>
            <option value='Central Midfielder (CM)'>Central Midfielder (CM)</option>
            <option value='Left Midfielder (LM)'>Left Midfielder (LM)</option>
            <option value='Right Midfielder (RM)'>Right Midfielder (RM)</option>
            <option value='Right Wing Forward (RWF)'>Right Wing Forward (RWF)</option>
            <option value='Left Wing Forward (LWF)'> Left Wing Forward (LWF)</option>
            <option value='Centre Forward (CF)'> Centre Forward (CF)</option>

          </select>
                </div> 
              </div> 
              <div className='video'>
          <input type="text" placeholder=' enter your url video' name='video' value={video} onChange={onChange}/> 

          </div>
              <div className="mt-5 text-center">
                <Link to="/home">
                <button className="btn btn-primary profile-button" type="button" onClick={onSubmit}>
                  Save Profile</button>
                  </Link>
              </div>
           
              <Link className='btn btn-light my-1' to='/dashbord'>
                       Go Back
                </Link> 
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ProfileForm

     

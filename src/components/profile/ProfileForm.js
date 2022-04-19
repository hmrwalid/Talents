import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useMatch, useNavigate } from 'react-router-dom'
import { createProfile, getCurrentProfile } from '../../Redux/action/ActionProfil'
import UploaFile from './UploaFile'

const ProfileForm = () => {
    const profile = useSelector((state)=>state.profile.profile)
    const loading = useSelector((state)=>state.profile.loading)
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
    <div className='containerForm' style={{marginTop: "9rem"}}>
     
      <div className='prff'>
      <h1 className='large h1' style={{color:"#b88b0f"}}>
        {creatingProfile ? 'Create Your Profile' : 'Edit Your Profile'}
      </h1>
      </div>
      <div className='frr'>
      <p className='lead' style={{color:"#b88b0f"}}>
        <i className='fas fa-user'  style={{color:"#b88b0f"}}/>
        {creatingProfile
          ? ` Let's get some information to make your`
          : ' Add some changes to your profile'}
      </p>
      <UploaFile/>
   <form className='frp' onSubmit={onSubmit} >
   <div className='form-group'>
   <small className='form-text'>
            Give us an idea of your Favorite position
          </small>
          <select className='inpt' name='Favorite_position' value={Favorite_position} onChange={onChange}>
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
            <option value='Central Attacking Midfielder (CAM)'> Central Attacking Midfielder (CAM)</option>
            <option value='Centre Forward (CF)'> Centre Forward (CF)</option>

          </select>
        
        </div>
        <div className='form-group' >
          <label className='label'>Name</label>
        <input className='inpt'
                name="name"
                placeholder="Name"
                type="text"
                icon="fa-solid fa-at"
                value={name} 
                onChange={onChange}
              />
                      </div>
                      <div className='form-group'>
                        <label className='label'>Email</label>
               <input className='inpt'
                name="email"
                placeholder="Email"
                type="text"
                icon="fa-solid fa-at"
                value={email} 
                onChange={onChange}/>
                </div>
              <div className='form-group'>
                <label className='label'>Age</label>
                <input className='inpt'
                name="age"
                placeholder="Age"
                type="text"
                icon="fa-solid fa-at"
                value={age} 
                onChange={onChange}
             />
             </div>
              <div className='form-group'>
                <label className='label'>Height</label>

              <input className='inpt'
                name="height"
                placeholder="Heigth"
                type="text"
                value={height} 
                icon="fa-solid fa-at"
                onChange={onChange}
                  />
                  </div>
                  <div className='form-group'>
                    <label className='label'>weight</label>
                <input className='inpt'
                name="weight"
                placeholder="Weigth"
                type="text"
                value={weight} 
                icon="fa-solid fa-at"
                onChange={onChange}
                  />
                  </div>
                  <div className='form-group'>
                    <label className='label'> select your strongerFoot</label>
                  <select className='inpt' name='stronger_Foot' value={stronger_Foot} onChange={onChange}>
                  <option value='Left'>Left</option>
            <option value='Right'>Right</option>
            <option value='both'>both</option>

            </select>
              </div>
              <div className='form-group'>
                <label className='label'>Address</label>
              <input className='inpt'
                name="address"
                placeholder="Address"
                type="text"
                value={address} 
                icon="fa-solid fa-at"
                onChange={onChange}
              />
              </div>
              <div className='form-group'>
                <label className='label'>city</label>
              <input className='inpt'
                name="city"
                placeholder="city"
                type="text"
                value={city} 
                icon="fa-solid fa-at"
                onChange={onChange}
              />
              </div>
                
                 <div className='form-group'>
                   <label className='label'>Tel</label>
             <input className='inpt'
                name="tel"
                placeholder="tel"
                type="text"
                value={tel} 
                icon="fa-solid fa-at"
                onChange={onChange}

              />
              </div>
               <div className='form-group'>
               <small className='form-text'>Tell us a little about yourself</small>
          <textarea
          className='inpt'
            placeholder='A short bio of yourself'
            name='bio'
            value={bio}
            onChange={onChange}
          />

        </div>
            
          
              <input  type='submit' className='btn btn-primary my-1' onSubmit={onSubmit} />

<Link className='btn btn-light my-1' to='/dashbord'>
  Go Back
</Link>
   </form>
   </div>
    </div>
  )
}

export default ProfileForm
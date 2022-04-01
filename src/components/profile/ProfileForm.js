import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useMatch, useNavigate } from 'react-router-dom'
import { createProfile, getCurrentProfile } from '../../Redux/action/ActionProfil'

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
    <div className='container' style={{marginTop: "11rem"}}>
      <h1 className='large text-primary'>
        {creatingProfile ? 'Create Your Profile' : 'Edit Your Profile'}
      </h1>

      <p className='lead'>
        <i className='fas fa-user' />
        {creatingProfile
          ? ` Let's get some information to make your`
          : ' Add some changes to your profile'}
      </p>
   <form onSubmit={onSubmit}>
   <div className='form-group'>
          <select name='Favorite_position' value={Favorite_position} onChange={onChange}>
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
          <small className='form-text'>
            Give us an idea of your Favorite position
          </small>
        </div>
        <div className='form-group'>
        <input
                name="name"
                placeholder="Name"
                type="text"
                icon="fa-solid fa-at"
                value={name} 
                onChange={onChange}
              />
                      </div>
                      <div className='form-group'>
               <input
                name="email"
                placeholder="Email"
                type="text"
                icon="fa-solid fa-at"
                value={email} 
                onChange={onChange}/>
                </div>
              <div className='form-group'>
                <input
                name="age"
                placeholder="Age"
                type="text"
                icon="fa-solid fa-at"
                value={age} 
                onChange={onChange}
             />
              <div className='form-group'>

              <input
                name="height"
                placeholder="Heigth"
                type="text"
                value={height} 
                icon="fa-solid fa-at"
                onChange={onChange}
                  />
                  </div>
                  <div className='form-group'>
                <input
                name="weight"
                placeholder="Weigth"
                type="text"
                value={weight} 
                icon="fa-solid fa-at"
                onChange={onChange}
                  />
                  </div>
                  <div className='form-group'>
                    <label> select your strongerFoot</label>
                  <select name='stronger_Foot' value={stronger_Foot} onChange={onChange}>
                  <option value='Left'>Left</option>
            <option value='Right'>Right</option>
            <option value='both'>both</option>

            </select>
              </div>
              <div className='form-group'>
              <input
                name="address"
                placeholder="Address"
                type="text"
                value={address} 
                icon="fa-solid fa-at"
                onChange={onChange}
              />
              </div>
              <div className='form-group'>
              <input
                name="city"
                placeholder="city"
                type="text"
                value={city} 
                icon="fa-solid fa-at"
                onChange={onChange}
              />
              </div>
                
                 <div className='form-group'>
             <input
                name="tel"
                placeholder="tel"
                type="text"
                value={tel} 
                icon="fa-solid fa-at"
                onChange={onChange}

              />
              </div>
               <div className='form-group'>
          <textarea
            placeholder='A short bio of yourself'
            name='bio'
            value={bio}
            onChange={onChange}
          />

          <small className='form-text'>Tell us a little about yourself</small>
        </div>
            
              </div>
              <input type='submit' className='btn btn-primary my-1' onSubmit={onSubmit} />

<Link className='btn btn-light my-1' to='/dashbord'>
  Go Back
</Link>
   </form>
    </div>
  )
}

export default ProfileForm
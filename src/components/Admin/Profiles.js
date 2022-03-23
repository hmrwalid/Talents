import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getProfiles} from "../../Redux/action/profilAction"
import Profil from './Profil';



const Profiles = () => {
    const dispatch =useDispatch()
    const profiles = useSelector((state)=>state.profiles.profiles)
    const loadProfile = useSelector((state)=>state.profiles.loadProfile)
    useEffect(()=>{
        dispatch(getProfiles())
    }, [])
    

  return (
      
    <div>
        <h1>Users</h1>

        {loadProfile? (<h3>loading ...</h3>)
        :profiles.length===0? (<h3>there are no profiles</h3>)
        :(profiles.map((el)=> <Profil key={el._id} profile={el} />))
    }

    
    </div>
  )
}

export default Profiles
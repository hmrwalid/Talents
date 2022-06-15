import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {getProfiles} from "../../Redux/action/ActionProfil"
import Profil from './Profil';
// import Profil from './Profil';



const Profiles = () => {
    const dispatch =useDispatch()
    const profiles = useSelector((state)=>state.profile.profiles)
    const loadProfile = useSelector((state)=>state.profile.load)
    
    useEffect(()=>{
      dispatch(getProfiles())
  }, [])
    

  return (
      
    <div style={{marginTop :"8rem"}}>
        <h1 style={{color:"#fff"}}>Users</h1>
             <Table>
             <thead>
      <tr>
        <th> User</th>
        <th>Email</th>
        <th></th>

      </tr>
    </thead>
             </Table>
             
        {loadProfile? (<h3>loading ...</h3>)
        :profiles.length===0? (<h3 style={{color:"#fff"}}>there are no profiles</h3>)
        :(profiles.map((el)=> <Profil key={el._id} profile={el} />))
    }

    
    </div>
  )
}

export default Profiles
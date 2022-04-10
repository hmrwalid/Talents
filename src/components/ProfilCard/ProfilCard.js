import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfiles } from '../../Redux/action/ActionProfil'
import ProfilCardItems from './ProfilCardItems'

const ProfilCard = () => {
    const dispatch =useDispatch()
    const profiles = useSelector((state)=>state.profile.profiles)
    
    useEffect(()=>{
      dispatch(getProfiles())
  }, [])
    
  return (
    <div style={{display :"flex", justifyContent:'center'}}> {profiles.map((el)=> <ProfilCardItems key={el._id} profile={el}/>) }</div>
  )
}

export default ProfilCard
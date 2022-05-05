import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfiles } from '../../Redux/action/ActionProfil'
import {  getImages } from '../../Redux/action/UploadFileAction'
import ProfilCardItems from './ProfilCardItems'

const ProfilCard = () => {
    const dispatch =useDispatch()
    const profiles = useSelector((state)=>state.profile.profiles)

    const images = useSelector((state )=>state.uploadFile.images)

    useEffect(()=>{
      dispatch(getProfiles())
      dispatch(getImages())
  }, [])
    
  return (
    <div style={{display :"flex", justifyContent:'center'}}>
       {images.map((image)=> <ProfilCardItems key={image._id} image={image}/>) }

    </div>
  )
}

export default ProfilCard
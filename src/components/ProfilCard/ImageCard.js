import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getImages } from '../../Redux/action/UploadFileAction'
import ImageItem from './ImageItem'

const ImageCard = () => {
    const dispatch= useDispatch()

    const images = useSelector((state)=>state.uploadFile.images)
    console.log(images)
    useEffect(()=>{
        dispatch(getImages())
    }, [])

  return (
      <div>
       {images.map((image)=> <ImageItem key={image._id} image={image}/>) }
      </div>
   

  )
}

export default ImageCard
import React from 'react'

const ImageItem = ({image}) => {
    const url ="https://res.cloudinary.com/cloud1996/image/upload/v1650582563/hhmchdxwpphkd6agx7mu.jpg"
  return (
      <img src ={image.avatar} />
    )
}

export default ImageItem
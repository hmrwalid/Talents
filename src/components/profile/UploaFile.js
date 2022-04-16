import axios from 'axios';
import React, { useState } from 'react'


const UploaFile = () => {
    const [file, setFile] = useState('');
    const uploadImage =()=>{
      const formData = new FormData();
      formData.append("file", file)
       axios.post("http://localhost:5000/api/upload", formData)
       .then((res)=>{
         console.log(res.data.avatar)
       });
    }
    const onSubmit=(e)=>{
     e.preventDefault() 
    }
 
  return (
    <div>
        <h6>Add your Image</h6>
    <div>
        <input 
        className='div-controle'
        type="file"
        name= "file"
        onChange={(e)=>setFile(e.target.files[0])}/>
              <input type='submit' value='Submit' className='btn btn-dark my-1' onClick={uploadImage} />
              </div>
    </div>
  )
}

export default UploaFile
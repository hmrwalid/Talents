import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage } from '../../Redux/action/UploadFileAction';
const UploaFile = () => {
  const dispatch =useDispatch()
  const [file, setFile] = useState({
    avatar: ""
  });
  const uploadfunc = (e) =>{ 
    setFile(e.target.files[0]);
    }
 
  const onSubmit = (e) => {
    e.preventDefault()
  const formData = new FormData();
  formData.append("file", file)
   dispatch(uploadImage(formData));

  };
 
    
 
  return (
    <div>
        <h6>Add your Image</h6>
    <div>
        <input 
        className='div-controle'
        type="file"
        name= "file"
        onChange={uploadfunc}/>
              <input type='submit' value='Submit' className='btn btn-dark my-1' onClick={onSubmit} />
              </div>
             
    </div>
  )
}

export default UploaFile


import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { uploadImage } from '../../Redux/action/UploadFileAction';
// const UploaFile = () => {
//   const dispatch =useDispatch()

//   const [file, setFile] = useState({
//     avatar: ""
//   });
//   const {
//     avatar
//   }= file
//   const onChange = (e) =>
//   setFile({ ...file, [e.target.name]: e.target.files[0] });
//   const onSubmit = (e) => {
//   const formData = new FormData();
//   formData.append("file", file)
//    dispatch(uploadImage(formData));
//   };
 
    
 
//   return (
//     <div>
//         <h6>Add your Image</h6>
//     <div>
//         <input 
//         className='div-controle'
//         type="file"
//         name= "file"
//         onChange={onChange}/>
//               <input type='submit' value='Submit' className='btn btn-dark my-1' onClick={onSubmit} />
//               </div>
//     </div>
//   )
// }

// export default UploaFile











const UploaFile = () => {
  const [file, setFile] = useState('');
  const [url, setUrl] = useState("")
  const uploadImage =()=>{
    const formData = new FormData();
    formData.append("file", file)
     axios.post("http://localhost:5000/api/upload", formData)
     .then((res)=>{
      setUrl(res.data.avatar)
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
            <img src ={url}/>
  </div>
)
}

export default UploaFile








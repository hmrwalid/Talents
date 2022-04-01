import React,{useState} from 'react';
import axios from 'axios';

const Upload = () => {
    const [file, setFile] = useState("")

    const uploadImage= async()=>{
      const formData = new FormData()
          formData.append("file", file)
          formData.append("upload_preset", "medslh15")
        await axios.post("https://api.cloudinary.com/v1_1/walid1996/upload", formData)
    }
  return (
    
 <div>
        <input type= "file"   onChange={(e)=>  setFile(e.target.files[0])} />
           <button  type ="submit" onClick={uploadImage}>upload</button>
    
  </div>);
}

export default Upload
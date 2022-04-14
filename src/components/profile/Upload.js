import axios from 'axios'
import React, { useState } from 'react'

const Upload = () => {
    const [image, setImage] = useState("")
    const [loading, setLoading] = useState("")

    const uploadImage =(e)=>{
        const files = e.target.files[0]
        const formdata = new FormData();
        formdata.append("upload_preset",'taleent')
        formdata.append("file",files)
        axios.post("/api/upload", formdata)
        .then((res)=>{         console.log(res.data.secure_url)

        })
        .catch((err)=>{console.log(err)})
    }
   
  return (
    <div>
     <input type='file' name='file' onChange={uploadImage}  /> 
     {loading ? <h1>loading...</h1>: <img src={image} />}
    </div>
  )
}

export default Upload




// import React, { useState } from 'react'

// const Upload = () => {
//     const [fileInputState, setFileInputState] = useState('');
//     const [previewSource, setPreviewSource] = useState('');
//     const [selectedFile, setSelectedFile] = useState();
//     const [successMsg, setSuccessMsg] = useState('');
//     const [errMsg, setErrMsg] = useState('');
//     const handleFileInputChange = (e) => {
//         const file = e.target.files[0];
//         previewFile(file);
//         setSelectedFile(file);
//         setFileInputState(e.target.value);
//     };

//     const previewFile = (file) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onloadend = () => {
//             setPreviewSource(reader.result);
//         };
//     };

//     const handleSubmitFile = (e) => {
//         e.preventDefault();
//         if (!selectedFile) return;
//         const reader = new FileReader();
//         reader.readAsDataURL(selectedFile);
//         reader.onloadend = () => {
//             uploadImage(reader.result);
//         };
//         reader.onerror = () => {
//             console.error('AHHHHHHHH!!');
//             setErrMsg('something went wrong!');
//         };
//     };

//     const uploadImage = async (base64EncodedImage) => {
//         try {
//             await fetch('/api/upload', {
//                 method: 'POST',
//                 body: JSON.stringify({ data: base64EncodedImage }),
//                 headers: { 'Content-Type': 'application/json' },
//             });
//             setFileInputState('');
//             setPreviewSource('');
//             setSuccessMsg('Image uploaded successfully');
//         } catch (err) {
//             console.error(err);
//             setErrMsg('Something went wrong!');
//         }
//     };
//   return (
//     <div>
//           <div>
//             <h1 className="title">Upload an Image</h1>
//             {/* <Alert msg={errMsg} type="danger" />
//             <Alert msg={successMsg} type="success" /> */}
//             <form onSubmit={handleSubmitFile} className="form">
//                 <input
//                     id="fileInput"
//                     type="file"
//                     name="image"
//                     onChange={handleFileInputChange}
//                     value={fileInputState}
//                     className="form-input"
//                 />
//                 <button  type="submit">
//                     Submit
//                 </button>
//             </form>
//             {previewSource && (
//                 <img
//                     src={previewSource}
//                     alt="chosen"
//                     style={{ height: '500px' }}
//                 />
//             )}
//         </div>
//     </div>
//   )
// }

// export default Upload
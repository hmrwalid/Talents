const multer = require('multer')
const path = require("path");

// Multer image config
const imageUpload = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);  
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".mp4" ) {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
// const videoStorage = multer.diskStorage({
//   destination: './public/videos', // Destination to store video 
//   filename: (req, file, cb) => {
//       cb(null, file.fieldname + '_' + Date.now() 
//        + path.extname(file.originalname))
//   }
// });

const videoUpload = multer({
 storage: multer.diskStorage({}),
 
  fileFilter(req, file, cb) {
    // upload only mp4 and mkv format
    let ext = path.extname(file.originalname);  

    if (ext !== ".mkv" && ext !== ".MPEG-4" &&  ext !== ".mp4") { 
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true)
 }
})

module.exports ={
  videoUpload,
  imageUpload
}
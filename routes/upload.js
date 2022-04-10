const multer= require("multer")
var express = require("express");

var router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload =multer({storage:storage});
router.post('/', upload.single("image") ,(req, res)=>{
  console.log(req.file);
  res.send("image upload succes")
})


module.exports = router;

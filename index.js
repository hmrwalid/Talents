const express = require("express")
require("dotenv").config({path:"./config/.env"})
const connectDB = require('./connectDB/DB.js')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport')
var indexRouter = require('./routes/index');
var postRouter = require('./routes/PostRoute')
var uploadFileRouter = require('./routes/upload')
var cors = require('cors');
const{ cloudinary }= require('./cloudinary/cloudinary')
var bodyParser = require('body-parser')
const app = express();
app.use (express.json())
connectDB();
const port = process.env.PORT 
app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
// app.use(express.static('build'));
app.use(cors());
app.use(express.static('public'));

// app.get('/api/images', async (req, res) => {    
//   const { resources } = await cloudinary.search
//       .expression('folder:talent')
//       .sort_by('public_id', 'desc')
//       .max_results(30)
//       .execute();
     
//     const publicIds = resources.map((file) => file.public_id);
//     res.send( publicIds);
     
     
// });

// app.post('/api/upload', async (req, res) => {
//   try {
//       const fileStr = req.body.data;
//       const uploadResponse = await cloudinary.uploader.upload(fileStr, {
//           upload_preset: 'taleent',
//       });
//       console.log(uploadResponse.secure_url);
//       res.json(uploadResponse);
//   } catch (err) {
//       console.error(err);
//       res.status(500).json({ err: 'Something went wrong' });
//   }
// });

// app.post('/test',(req,res)=>{
//     cloudinary.uploader.unsigned_upload("https://cloudinary.com/console/c-a27e541bcce728987a0b72ff90911b/media_library/folders/home", {upload_preset: "preset"}, (error, result)=>{
//         console.log(result, error);
//       });
// })
//unsigned_upload


app.use('/api', indexRouter); //http://localhost:5000/api
app.use('/api/post', postRouter) //http://localhost:5000/api/post
app.use('/api/upload', uploadFileRouter)  //http://localhost:5000/api/upload
/* passport */
app.use(passport.initialize())
require('./security/passport')(passport)




app.listen(port, (err)=>
err? console.log(err): console.log (`server is running on port ${port}`))

const express = require("express")
require("dotenv").config({path:"./config/.env"})
const connectDB = require('./connectDB/DB.js')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport')
var indexRouter = require('./routes/index');
var postRouter = require('./routes/PostRoute')
const uploadRouter = require('./routes/upload')
var cors = require('cors');
const multer= require("multer")
const app = express();
app.use (express.json())
connectDB();
const port = process.env.PORT 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false },{ "path": false }));
app.use(cookieParser());
// app.use(express.static('build'));
app.use(cors());
app.use(express.static('public'));
const cloudinary = require('cloudinary').v2

cloudinary.v2.uploader.upload("./assets/talent.jpg", {upload_preset: "my_preset"}, (error, result)=>{
    console.log(result, error);
  });

app.use('/upload', uploadRouter) //http://localhost:5000/upload
app.use('/api', indexRouter); //http://localhost:5000/api
app.use('/api/post', postRouter) //http://localhost:5000/api/post

/* passport */
app.use(passport.initialize())
require('./security/passport')(passport)




app.listen(port, (err)=>
err? console.log(err): console.log (`server is running on port ${port}`))

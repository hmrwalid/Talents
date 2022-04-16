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




app.use('/api', indexRouter); //http://localhost:5000/api
app.use('/api/post', postRouter) //http://localhost:5000/api/post
app.use('/api/upload', uploadFileRouter)  //http://localhost:5000/api/upload
/* passport */
app.use(passport.initialize())
require('./security/passport')(passport)




app.listen(port, (err)=>
err? console.log(err): console.log (`server is running on port ${port}`))

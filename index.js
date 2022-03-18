const express = require("express")
require("dotenv").config({path:"./config/.env"})
const connectDB = require('./connectDB/DB.js')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport')
var indexRouter = require('./routes/index');
const app = express();
app.use (express.json())
connectDB();
const port = process.env.PORT 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('build'));

app.use('/api', indexRouter); //http://localhost:5000/api

/* passport */
app.use(passport.initialize())
require('./security/passport')(passport)




app.listen(port, (err)=>
err? console.log(err): console.log (`server is running on port ${port}`))

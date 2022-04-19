const express = require("express")
require("dotenv").config({path:"./config/.env"})
const connectDB = require('./connectDB/DB.js')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport')
var indexRouter = require('./routes/index');
var postRouter = require('./routes/PostRoute')
var uploadFileRouter = require('./routes/upload')
const nodemailer = require("nodemailer")

var cors = require('cors');
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
 // nodemailer
 app.post("/send_mail", cors(), async (req, res) => {
	let { text } = req.body
	const transport = nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		port: process.env.MAIL_PORT,
        secureConnection: false,
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS
		},
        tls: {
            ciphers:'SSLv3'
        }
	})

	await transport.sendMail({
		from: process.env.MAIL_FROM,
		to: "test@test.com",
		subject: "test email",
		html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>Here is your email!</h2>
        <p>${text}</p>
    
        <p>All the best, Hmr walid</p>
         </div>
    `
	})
})



app.use('/api', indexRouter); //http://localhost:5000/api
app.use('/api/post', postRouter) //http://localhost:5000/api/post
app.use('/api/upload', uploadFileRouter)  //http://localhost:5000/api/upload
/* passport */
app.use(passport.initialize())
require('./security/passport')(passport)




app.listen(port, (err)=>
err? console.log(err): console.log (`server is running on port ${port}`))

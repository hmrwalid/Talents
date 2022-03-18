const mongoose = require ('mongoose');
require ('dotenv').config({path:"../config/.env"})
const MONGO_URI=process.env.MONGO_URI



const connectDB= async()=>{
    try {
        let result = await mongoose.connect(MONGO_URI)
        console.log('database connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB
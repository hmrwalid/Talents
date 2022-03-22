const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserProfile = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true
    },
   
    age:{type:Number,required:true},
    height : {type:String,required:true},
    weight : {type:String,required:true},
    stronger_Foot :{type:String,required:true},
    image: {type: String},
    address: "string",
    tel: "number",
    city: "string",
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("profiles", UserProfile);
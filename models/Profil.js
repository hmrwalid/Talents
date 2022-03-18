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
    height : {type:String},
    weight : {type:String},
    stronger_Foot :{type:String},
    image: {type: String},
    address: "string",
    tel: "string",
    city: "string",
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("profiles", UserProfile);
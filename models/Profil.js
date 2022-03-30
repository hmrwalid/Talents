const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserProfile = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true
    },
     
    name:{type:String,required:true},
    email:{type:String,required:true},

    age:{type:String,required:true},
    height : {type:String,required:true},
    weight : {type:String,required:true},
    stronger_Foot :{type:String,required:true},
    image: {type: String},
    video: {type: String},
    bio: {type: String},

    address: {type: String},
    tel: {type: String},
    city: {type: String},
    Favorite_position: {type: String},

    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("profiles", UserProfile);
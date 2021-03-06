const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uploadSchema = new Schema( {
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  avatar: {
    type: String,
  },
  
  cloudinary_id: {
    type: String,
  },
});

module.exports = mongoose.model("Upload", uploadSchema);


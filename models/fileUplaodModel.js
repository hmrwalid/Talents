const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uploadSchema = new Schema({
 
  avatar: {
    type: String,
  },
  video: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
});

module.exports = mongoose.model("Upload", uploadSchema);


var express = require("express");
var router = express.Router();
const {videoUpload,
  imageUpload} = require('../cloudinary/multer')
const {cloudinary }= require('../cloudinary/cloudinary')
const Model = require('../models/fileUplaodModel')
const User = require("../models/User")
const passport = require('passport')

// upload images
router.post("/", passport.authenticate("jwt", { session: false }), imageUpload.single("file"), async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

      // Upload image to cloudinary
     const result = await cloudinary.uploader.upload(req.file.path);
      // Create new user
      let fileUpload = new Model({
        user: req.user.id,
        avatar :result.secure_url,
        cloudinary_id: result.public_id,

      });
      // Save fileUpload
      await fileUpload.save();
      res.status(200).json(fileUpload);
    } catch (err) {
      console.log(err);
    }
  });

   /*************************** */
   // get all images
  router.get('/', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
      const images = await Model.find().sort({ date: -1 });
  
      res.json(images);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  // get image by id
  router.get('/:id', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
      const image = await Model.findById(req.params.id);
  
      if (!image) return res.status(404).json({ msg: 'image not found' });
  
      res.json(image);
    } catch (err) {
      console.error(err.message);
      if (err.kind == 'ObjectId')
        return res.status(404).json({ msg: 'image not found' });
      res.status(500).send('Server Error');
    }
  });

   // Delete a image
   router.delete('/:id', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
      const image = await Model.findById(req.params.id);
  
      
      // Check user
      if (image.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
      }
  
      await image.remove();
  
      res.json({ msg: 'image removed' });
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });

  /**********video******************** */
  // Require the Cloudinary library

  router.post("/video",passport.authenticate("jwt", { session: false }), videoUpload.single("file"), async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload_large(req.file.path);
      
  
      // Create new user
      let fileUpload = new Model({
        avatar: result.secure_url,
        video :result.secure_url,
        cloudinary_id: result.public_id,
        user: req.user.id,

      });
      // Save fileUpload
      await fileUpload.save();
      res.json({fileUpload, msg:"uplaod with success"});
    } catch (err) {
      console.log(err);
    }
  });

  
 





module.exports = router;
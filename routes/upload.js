var express = require("express");
var router = express.Router();
const {videoUpload,
  imageUpload} = require('../cloudinary/multer')
const {cloudinary }= require('../cloudinary/cloudinary')
const Model = require('../models/fileUplaodModel')
const videoModel = require('../models/videoUpload')
const User = require("../models/User")
const passport = require('passport')

// upload images
router.post("/", passport.authenticate("jwt", { session: false }), imageUpload.single("file"), async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

      // Upload image to cloudinary
     const result = await cloudinary.uploader.upload(req.file.path);
     console.log(req.file)
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
      console.log(res.data)
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
      //  
    }
  });
  // get my Image
  router.get("/image/me",passport.authenticate("jwt", { session: false }), async(req, res)=>{
    try {
      // const user = await User.findById(req.user.id).select('-password');

      const image = await Model.findOne({
        user: req.user.id,
      }).populate('user', ["name", "email", "role"])
  console.log(image)
      if (!image) {
        return res.status(400).json({ msg: 'There is no image for this user' });
      }
  
      res.json(image);

    } catch (error) {

      console.log(error)
    }
  })

   // Delete a image
   router.delete('/:id',  async (req, res) => {
    try {
      const image = await Model.findById(req.params.id);
  
      
      // // Check user
      // if (image.user.toString() !== req.user.id) {
      //   return res.status(401).json({ msg: 'User not authorized' });
      // }
  
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
      const cloud = await cloudinary.uploader.upload(req.file.path,{
         folder: "my/", 
    public_id: "my_name" }
    
    );
      
  console.log(cloud)
      // Create new user
      let fileUpload = new videoModel({
        user: req.user.id,
        video :cloud.secure_url,
        cloudinary_id: cloud.public_id,

      });
      // Save fileUpload
      await fileUpload.save();
      res.json({fileUpload});
    } catch (err) {
      console.log(err);
    }
  });

  
 





module.exports = router;
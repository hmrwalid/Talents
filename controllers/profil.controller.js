const ProfileModel = require('../models/Profil')
const ValidateProfile = require("../validation/Profil")
const auth = require("../middellware/auth")
const CreateProfile = async (req ,res)=>{
   const {errors, isValid} = ValidateProfile(req.body)
    
   if(!isValid){
    res.status(404).json(errors)
   }
   const {
      name,
      email,
      age,
      height ,
      weight ,
      stronger_Foot ,
      image,
      video,
      bio,
      address,
      tel,
      city,
  }  = req.body
  // Build profile
  const profileFields = {};
  profileFields.user = req.user.id;
  if (name) profileFields.name = name;
  if (email) profileFields.email = email;
  if (age) profileFields.age = age;
  if (height) profileFields.height = height;
  if (weight) profileFields.weight = weight;
  if (stronger_Foot) profileFields.stronger_Foot = stronger_Foot;
  if (image) profileFields.image = image;
  if (video) profileFields.video = video;
  if (bio) profileFields.bio = bio;
  if (address) profileFields.address = address;
  if (tel) profileFields.tel = tel;
  if (city) profileFields.city = city;

  try {
      let profile = await ProfileModel.findOne({ user: req.user.id });
      if (profile) {
        // Update
        profile = await ProfileModel.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      // Create
      profile = new ProfileModel(profileFields);
      await profile.save();

      res.json(profile);


 
} catch (error) {
   res.status(404).json(error.message)
}
}       



const FindAllProfiles = async (req ,res)=>{
    try {
        const result =await ProfileModel.find().populate('user', ["name", "email", "role"])
        res.json(result)
    } catch (error) {
        res.status(400).send({message:"can not get all users"})
    }
}

const FindSingleProfile = async (req ,res)=>{
    try {
        const profile = await ProfileModel.findOne({
          user: req.user.id,
        }).populate('user', ["name", "email", "role"])
    
        if (!profile) {
          return res.status(400).json({ msg: 'There is no profile for this user' });
        }
    
        res.json(profile);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }

const DeleteProfile = async (req ,res)=>{
    try {
        const result =await ProfileModel.deleteOne({_id:req.params.id})
        res.status(200).send({response:result, message:"deleting user by id successful"})
    } catch (error) {
        res.status(400).send({message:"can not delete  user"})
    }
}

const UpdateProfile = async(req, res)=>{
    try {
        const result=await ProfileModel.updateOne({_id:req.params.id}, {$set:{...req.body}})
            res.send({message:'profile updated'})
    } catch (error) {
        res.send(400).send({message: "update unsuccessful"})
    }
}

module.exports = {
    CreateProfile,
    FindAllProfiles,
    FindSingleProfile,
    DeleteProfile,
    UpdateProfile
}



// const user=await ProfileModel.findOne({email:req.body.email}).populate('user', ["name", "email", "role"])
// if (user){
//     res.status(400).send({message: "user already exists"})
//     return;
// }
// const response=await newProfile.save()
// res.send({response:response, message:'A new profile has been created'})
// }
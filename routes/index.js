var express = require("express");
const {
  Register,
  Login,
  Test,
  Admin,
} = require("../controllers/user.controller");

const passport = require('passport')
var router = express.Router();
const { ROLES, inRole } = require("../security/RoleMiddelware");
const {  FindAllProfiles, FindSingleProfile, DeleteProfile,  CreateProfile,  } = require("../controllers/profil.controller");

/* users routes. */
router.post("/register", Register);
router.post("/login", Login);


// test router
// router.get('/test',   passport.authenticate('jwt', { session: false }),Test)
// router.get('/admin',  passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),Admin)


/* add profile route */
router.post("/profiles", 
passport.authenticate("jwt", { session: false }),
CreateProfile);

/* get all profiles */
router.get("/", 
passport.authenticate("jwt", { session: false }),

FindAllProfiles);
/* get one profile */
router.get("/profile/me", 
passport.authenticate("jwt", { session: false }),
FindSingleProfile);
/* delete profiles */
router.delete("/profile/me", 
passport.authenticate("jwt", { session: false }),

DeleteProfile);



module.exports = router;
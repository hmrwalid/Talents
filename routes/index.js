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
const { AddProfile, FindAllProfiles, FindSingleProfile, DeleteProfile } = require("../controllers/profil.controller");

/* users routes. */
router.post("/register", Register);
router.post("/login", Login);


// test router
// router.get('/test',   passport.authenticate('jwt', { session: false }),Test)
// router.get('/admin',  passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),Admin)


/* add profile route */
router.post("/profiles", 
passport.authenticate("jwt", { session: false }),
AddProfile);
/* get all profiles */
router.get("/profiles", 
passport.authenticate("jwt", { session: false }),
inRole(ROLES.ADMIN),
FindAllProfiles);
/* get one profiles */
router.get("/profile", 
passport.authenticate("jwt", { session: false }),
FindSingleProfile);
/* delete profiles */
router.delete("/profiles/:id", 
passport.authenticate("jwt", { session: false }),
inRole(ROLES.ADMIN),
DeleteProfile);

module.exports = router;


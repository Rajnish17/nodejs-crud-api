const express =require("express");

const router =express.Router();
const {Logincontroller, signupcontroller} = require("../controllers/auth.controller");


router.get("/",Logincontroller)
router.get("/signup",signupcontroller)

module.exports= router;
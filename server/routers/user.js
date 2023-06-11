const express = require('express');
//express woutes setup
const router = express.Router();
//importing controller
const {signupUser,loginUser} = require('./../controllers/userController')

//signup user
router.post('/signup',signupUser)

//login user
router.post('/login',loginUser)

module.exports = router;
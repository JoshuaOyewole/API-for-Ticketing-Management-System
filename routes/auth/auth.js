const express = require('express');
const router = express.Router();
const {login,logout,register } = require("../../controllers/auth");

//LOGIN
//REGISTER A USER
//LOGOUT 

router.post('/', login).post('/', register).get('/', logout);
module.exports = router;
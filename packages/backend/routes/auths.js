const express = require('express');
const router = express.Router();
const registerUser = require("../controllers/register");
const logUser = require("../controllers/login");


// register user
router.post('/register',registerUser)
// login user
router.post('/login', logUser);
// reset password
router.post('/password/reset',(req,res)=>{
    console.log(req.body)
    res.json({msg:"Dear user you hit the login route"})
});




module.exports = router;
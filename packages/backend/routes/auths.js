const express = require('express');
const router = express.Router();



router.post('/login',(req,res)=>{
    console.log(req.body)
    res.json({msg:"Dear user you hit the login route"})
});

router.post('/register',(req,res)=>{
    res.json({msg:"Dear user you hit the registration route"})
})

router.post('/password/reset',(req,res)=>{
    res.json({msg:"Dear user you hit the forgot password route"})
})

module.exports = router;
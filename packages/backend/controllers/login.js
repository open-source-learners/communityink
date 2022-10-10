const user = require('../models/User');
const bcrypt = require('bcrypt');


module.exports = (req,res)=>{
 const {email, password} = req.body;

 user.find({email},(err,found)=>{
     if(err) console.log(err);
     if(!found){
        res.send('the user does not exist')
     }else{
         bcrypt.compare(password, found[0].password,(err,matched)=>{
             if(err) console.log(err);
             if(matched){
                 res.send("user credentials matched")
             }else{
                 res.send('invalide email or password')
             }
         })
     }
 })
}
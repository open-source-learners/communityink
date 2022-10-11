const user = require('../models/User');
const bcrypt = require('bcrypt');
const gen_tok = require('../utils/gen_token')


module.exports = (req,res)=>{
 const {email, password} = req.body;

 user.findOne({email:email},(err,found)=>{
     if(err) throw err;
     if(!found){
        return res.send('the user does not exist')
     }else{
         bcrypt.compare(
             password, 
             found.password,(err,matched)=>{
             if(err) console.log(err);
             if(matched){
                 res.json({
                     user:found,
                     token:gen_tok(found._id)
                 })
                // res.send('the user is matched')
                 
             }else{
                 res.send('invalide email or password')
             }
         })
     }
 })
}
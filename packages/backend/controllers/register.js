const user = require('../models/User');
const bcrypt = require('bcrypt');
const gen_tok = require('../utils/gen_token')

module.exports = (req,res)=>{
    const {
        name,
        password,
        email,
        idNo,
        campus,
        faculty,
        dept } = req.body;
        
        // check if the user exist
        user.find({email:email},(err,found)=>{
            if(err) throw err;
            if(found.length > 0){
                res.send('you already have an account')
            }else{
                bcrypt.hash(password,10, function(error, hash) {
                    if(error) throw error;
                    const newUser = new user({
                        name,
                        password:hash,
                        email,
                        idNo,
                        campus,
                        faculty,
                        dept
                    })
                    newUser.save((ero,savedUser)=>{
                        console.log(gen_tok(savedUser._id));
                    })
                    console.log(process.env.jwt_token_sec)
                    res.end()
                });
            }

        })
        
}
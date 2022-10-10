const jwt = require('jsonwebtoken');

 const generate_token  = (id)=>{
    return jwt.sign({id}, process.env.jwt_token_sec,{
        expiresIn:'30d'
    })
}

module.exports = generate_token;
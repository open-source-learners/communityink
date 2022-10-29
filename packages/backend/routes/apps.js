const express = require('express');
const routes =  express.Router();


routes.get('/',(req,res)=>{
    res.send("welcome to studoor")
})


module.exports = routes;
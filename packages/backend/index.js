const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const mongoose = require("mongoose");
const mongo_uri = process.env.DB_URI;

//config dotenv
require('dotenv').config()
// connecting mongodb

mongoose.connect('mongodb://127.0.0.1:27017/studoor',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
},(err)=>{
    if(err){
        console.log(err)
    }
    console.log("mongo db is connected successfully")
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', (req,res)=>{
    res.send("<h1>Welcome to studoor</h1>")
})
// application external apis
app.use('/auths', require('./routes/auths'));

// application internal apis
app.use('/app', require('./routes/apps'))

app.listen(4020, console.log('server is running on port 4020'));
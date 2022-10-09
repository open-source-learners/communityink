const express = require('express');
const app = express()

// app.use({extends})


app.get('/', (req,res)=>{
    res.send("<h1>Welcome to studoor</h1>")
})

app.use('/auths', require('./routes/auths'));

app.listen(4020, console.log('server is running on port 4020'));
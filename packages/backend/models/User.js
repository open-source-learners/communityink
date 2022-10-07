const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    idNo:{type:String, required:true, unique:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    name:{type:String, required:true},
    campus:{type:String,required:true},
    faculty:{type:String,required:true},
    dept:{type:String,required:true},
    rank:{type:String, required:false, 'default': 'user'},
    createdOn:{ type: Date, 'default': Date.now }
})


module.exports(mongoose.model('user', userSchema));
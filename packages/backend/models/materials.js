const mongoose = require('mongoose');
const schema = mongoose.Schema;


const materials = new schema({
    campus:{type:String,required:true},
    departmet:{type:String,required:true},
    course:{type:String, required:true},
    resourcesUir:[{type:String}],
    title:{type:String},
    category:{type:String,required:true},
    postedBy:{type: schema.Types.ObjectId, ref:'user'},
    postedOn:{type:Date, default:Date.now}
    

})


module.exports(mongoose.model('materials', materials))
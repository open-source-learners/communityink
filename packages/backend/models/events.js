const mongoose = require('mongoose');
const schema = mongoose.Schema;


const eventsSchema = new schema({
    post:{type:String},
    postImg:[{type:String}],
    ownBy:{type:schema.Types.ObjectId, ref:'user'}
})


module.exports(mongoose.model('events', eventsSchema))
const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
let Task = new Schema({
    
    todo: {type: String, required: true, max: 12},
   
    isDone: {type: Boolean, required: true}
      
     
});

//Export the model
module.exports = mongoose.model('Task', Task);
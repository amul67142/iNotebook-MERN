const mongoose = require('mongoose');



const { Schema } = mongoose;

const notesSchema = new Schema({
 Title: {
    type:String,
    required : true,

 },

 Description:{
    type:String,
    required:true,
    
    
 },

 tags:{
    type:String,
    default:"General"

 },

 Date:{
    type : Date,
    default: Date.now

 }

  
});

module.exports= mongoose.model('notes',notesSchema)
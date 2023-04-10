const mongoose = require('mongoose');
const URI ='mongodb://127.0.0.1:27017'

const connectTOMongo =async()=>{
    mongoose.connect(URI)
       await console.log('connected');
       
    }


module.exports = connectTOMongo
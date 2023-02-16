const mongoose = require ('mongoose');

const arrivalRoutes = new mongoose.Schema({
    arrival:{
        type:String,
        unique:true,
        required:true,
    }
},  {timestamps:true});   

module.exports = mongoose.model('arrival', arrivalRoutes);

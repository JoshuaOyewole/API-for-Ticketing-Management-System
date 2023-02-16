const mongoose = require ('mongoose');

const departureRoutes = new mongoose.Schema({
    departure:{
        type:String,
        unique:true,
        required:true,
    }
},  {timestamps:true});   

module.exports = mongoose.model('departure', departureRoutes);

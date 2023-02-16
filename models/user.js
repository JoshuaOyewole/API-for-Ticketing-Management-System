const mongoose = require ('mongoose');

const adminSchema = new mongoose.Schema({
    
    firstname: {
        type: String,
        required: true,
        maxLength:200,
    },
    lastname: {
        type: String,
        required: true,
        maxLength:200,
    },
    email:{
        type: String,
        required: true,
        maxLength: 200,
        unique:true,
    },
    password:{
        type: String,
        required: true,
        maxLength: 200
    },
    gender: {
        type: String,
        required: true,
        maxLength:50,
	enum: {values:['Male', 'Female'], message:  '{VALUE} is not supported'}
    },
    isAdmin: {
        type: Boolean,
        default: false,
        maxLength:50,
    },
    username:{
        type:String,
        maxLength:200,
    }
    
},{timestamps:true});   

module.exports = mongoose.model('Admin', adminSchema);

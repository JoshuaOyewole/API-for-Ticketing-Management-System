const mongoose = require ('mongoose');

const financeSchema = new mongoose.Schema({
    payment_status:{
        type: String,
        unique:true,
        required:true,
    },
    amount:{
        type: Number,
        unique:true,
        required:true,
    },
    username:{
        type: String,
        unique:true,
        required:true,
    },
    date:{
        type: Date,
        unique:true,
        required:true,
    },
    userID:{
        type: String,
        unique:true,
        required:true,
    }
},  {timestamps:true});   

module.exports = mongoose.model('finance', financeSchema);

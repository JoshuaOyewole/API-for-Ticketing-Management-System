const mongoose = require ('mongoose');

const flightSchema = new mongoose.Schema({
    
    flyingFrom: {
        type: String,
        required: true,
        maxLength:150,
    },
    flyingTo: {
        type: String,
        required: true,
        maxLength:150,
    },
    departureDate:{
        type: Date,
        required: true,
        maxLength: 200,
    },
    price: {
        type: Number,
        required: true,
        maxLength:150,
    },
},{timestamps:true});   

module.exports = mongoose.model('flights', flightSchema);

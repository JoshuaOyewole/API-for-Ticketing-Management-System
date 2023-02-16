const mongoose = require ('mongoose');

const ticketSchema = new mongoose.Schema({
    
    gender: {
        type: String,
        required: true,
        maxLength:50,
	enum: {values:['Mr', 'Mrs', 'Miss'], message:  '{VALUE} is not supported'}
    },
    seatClass: {
        type: String,
        required: true,
        maxLength:50,
	enum: {values:['Economy', 'Premium Economy', 'First Class','Business Class'], message:  '{VALUE} is not supported'}
    },
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
    othernames: {
        type: String,
        required: true,
        maxLength:200,
    },
    bookingDate:{
        type: Date,
        required: true,
        maxLength: 200,
        unique:true,
    },
    departureDate:{
        type: Date,
        required: true,
        maxLength: 200,
        unique:true,
    },
    arrivalDate:{
        type: Date,
        required: true,
        maxLength: 200,
        unique:true,
    },
    from:{
        type: String,
        required: true,
        maxLength: 200,
    },
    to: {
        type: String,
        required: true,
        unique:true,
    },
    airline: {
        type: String,
        required: true,
        unique:true,
    },
    
    flight_no:{
        type:String,
        maxLength:200,
    },
    depTerminal:{
        type:String,
        maxLength:200,
    },
    arrTerminal:{
        type:String,
        maxLength:200,
    },
    seatNo:{
        type:String,
        maxLength:200,
    },
    extraBuggage:{
        type:Number,
        maxLength:200,
    },
    surcharge:{
        type:String,
        maxLength:200,
    },
    baseFare:{
        type:String,
        maxLength:200,
    },
    ticketingCharge:{
        type:String,
        maxLength:200,
    },
    fuelInsuranceCharge:{
        type:String,
        maxLength:200,
    },
    totalCharge:{
        type:String,
        maxLength:200,
    },
},{timestamps:true});   

module.exports = mongoose.model('Ticket', ticketSchema);

const mongoose = require ('mongoose');

const flightSchema = new mongoose.Schema({
    currency:{
        type:String,
        required: true,
        maxLength:50,
    },
    outbound:{
        type:{
            airport_from:{
                type: String,
                required: true,
                maxLength:150,
            },
            airport_to:{
                type: String,
                required: true,
                maxLength:150,
            },
            departure_time:{
                type: [Date],
                required: true,
                maxLength:150,
                unique:true
            },
            arrival_time:{
                type: [Date],
                required: true,
                maxLength:150,
                unique:true
            },
            flight_number:{
                type: String,
                required: true,
                maxLength:150,
            },
            duration:{
                type:Number,
                required: true,
                maxLength:150,
            },
        },
        required: true,
        maxLength:50,
    },
    prices: {
        type: [Number],
        required: true,
    }
},{timestamps:true});   

module.exports = mongoose.model('flights', flightSchema);

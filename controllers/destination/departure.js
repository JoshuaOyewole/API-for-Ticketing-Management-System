const Departure = require('../../models/destinations/departure');

 const getAllDepartures = async (req,res,next)=>{
    try{
        const departures = await Departure.find({});
        res.status(200).json(departures);
      }
       catch(err){ 
        next(err);
      }
}

 const addDeparture = async (req,res,next)=>{
    try{
        await Departure.create(req.body);
        res.status(201).json(`Departure Destination successfully added`);
      }
       catch(err){
        next(err);
      }
}

 const deleteDeparture = async (req,res, next)=>{
    try{
       await Departure.findByIdAndDelete(req.params.id);
        res.status(201).json(`Departure Destination successfully deleted`);
      }
       catch(err){
        next(err);
      }
}



module.exports = {getAllDepartures,addDeparture, deleteDeparture};
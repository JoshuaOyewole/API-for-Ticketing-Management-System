const Arrival = require('../../models/destinations/arrival');

  const getArrival = async (req,res,next) =>{
    try{
        const get_arrival = await Arrival.findById(req.params.id);
        res.status(200).json(get_arrival);
      }
       catch(err){ 
        next(err);
      }
} 

 const getAllArivalDestinations = async (req,res,next)=>{
    try{
        const arrivalDestinations = await Arrival.find({});
        res.status(200).json(arrivalDestinations);
      }
       catch(err){ 
        next(err);
      }
}

 const addArrivalDestinations = async (req,res,next)=>{
    try{
        await Arrival.create(req.body);
        res.status(201).json(`Arrival Destination successfully added`);
      }
       catch(err){
        next(err);
      }
}

 const deleteArrivalDestination = async (req,res, next)=>{
    try{
       await Arrival.findByIdAndDelete(req.params.id);
        res.status(201).json(`Arrival Destination successfully deleted`);
      }
       catch(err){
        next(err);
      }
}



module.exports = {getArrival,getAllArivalDestinations,addArrivalDestinations, deleteArrivalDestination};
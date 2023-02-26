const Flights = require("../models/flight");
const createError = require("../util/error");

//ADD FLIGHT
const addFlight = async (req, res, next) => {
  const { flyingFrom, flyingTo, departureDate } = req.body;

  if (!flyingFrom || flyingFrom == " " || !flyingTo  || flyingTo == " " || !departureDate || departureDate == " " ){
    return next(createError(404, "Kindly Fill the required Fields!"));
  }
  
  /* CHECK IF SAME FLIGHT ALREADY EXIST */
  try {
    const findFlight = await Flights.find({
      flyingFrom: `${flyingFrom}`,
      flyingTo: `${flyingTo}`,
      departureDate: `${departureDate}`,
    });

    if (findFlight.length === 0) {
      const flight = await Flights.create(req.body);
      res.status(200).json(`Flight successfully Added!`);
    }
    else{
      return next(createError(404, "Flight Already Added!"));
    }
  
  } catch (err) {
    next(err);
  }
};

//FIND FLIGHT
const findFlight = async (req, res, next) => {
 
const { flyingFrom, flyingTo} = req.query;

  try {
    const findFlight = await Flights.find({
      flyingFrom: `${flyingFrom}`,
      flyingTo: `${flyingTo}`,
    });

    if (findFlight.length === 0) {
      return next(createError(404, "No Flight Available!"));
    }

    res.status(200).json(findFlight);
  } catch (err) {
    next(err);
  }
};

//FIND ALL FLIGHT
const findAllFlight = async (req, res, next) => {
  try {
    const findFlights = await Flights.find({});

    if (findFlights.length === 0) {
      return next(createError(404, "No Flight Available!"));
    }
    res.status(200).json(findFlights);
  } catch (err) {
    next(err);
  }
};

module.exports = { addFlight, findAllFlight, findFlight };

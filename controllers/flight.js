const Flights = require("../models/flight");
const createError = require("../util/error");

//ADD FLIGHT
const addFlight = async (req, res, next) => {
  const { outbound } = req.body;
  const { airport_from, airport_to, departure_time } = outbound;

  if (!airport_from || airport_from == " " || !airport_to  || airport_to == " " || !departure_time || departure_time == " " ){
    return next(createError(404, "Kindly Fill the required Fields!"));
  }
  
  /* CHECK IF SAME FLIGHT ALREADY EXIST */
  try {
    const findFlight = await Flights.find({
      airport_from: `${airport_from}`,
      airport_to: `${airport_to}`,
      departure_time: `${departure_time}`,
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
 
const { airport_from, airport_to} = req.query;

  try {
    const findFlight = await Flights.find({
      airport_from: `${airport_from}`,
      airport_to: `${airport_to}`,
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

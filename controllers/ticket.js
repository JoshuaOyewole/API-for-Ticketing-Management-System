const Ticket = require('../models/ticket');
const createError = require("../util/error");

//BOOK TICKET
const addTicket = async (req,res,next)=>{
  try{
    const ticket= await Ticket.create(req.body);

    if(!ticket){
      return next(createError(404, "Kindly fill the required details!"))
    }
    /* const {createdAt, updatedAt, password, ...otherDetails } = getTicket._doc; */

    res.status(200).json(`Ticket successfully booked!`);
  }
   catch(err){ 
    next(err);
  }
}

//GET A TICKET
const getTicket = async (req,res,next)=>{
console.log(req.body);
  try{
    const getTicket = await Ticket.findById(req.body.bookingRef);

    if(!getTicket){
      return next(createError(404, "Booking Reference not Found!"))
    }
    const {createdAt, updatedAt, password, ...otherDetails } = getTicket._doc;

    res.status(200).json({...otherDetails});
  }
   catch(err){ 
    next(err);
  }
}

//GET ALL Ticket
const getAllTickets = async (req,res,next)=>{
    try {
      const tickets = await Ticket.find({});

      if(!tickets) return next(createError(404, "No Ticket Available!"))
      res.status(200).json(tickets);
    } catch (err) {
      next(err);
    }
}

//UPDATE TICKET
/* const updateTicket = async (req,res,next)=>{
  try{
    const updateTicket = await Ticket.findOneAndUpdate(query, {name: req.body });

    if(!updateTicket){
        res.status(404).json(`Ticket not found!`)
    }
    res.status(201).json('Ticket Information successfully Updated');
  }
   catch(err){
    next(err);
  }
} */

//DELETE TICKET
const deleteTicket = async (req,res,next)=>{
  try{
    const deletedTicket = await Ticket.findByIdAndDelete(req.params.id);
    if(!deletedTicket){
     res.status(404).json(`Booking Reference does not Exist!`);
    }
    else{
     res.status(201).json(`Ticket deleted successfully`);
    }
  }
   catch(err){
    next(err);
  }
 }

 module.exports = {addTicket,getTicket, getAllTickets,  deleteTicket}
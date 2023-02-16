const transactions = require('../models/transaction');

 const getTransaction = async (req,res,next) =>{
    try{
        const get_transaction = await transactions.findById(req.params.id);
        res.status(200).json(get_transaction);
      }
       catch(err){ 
        next(err);
      }
}

 const getAllTransaction = async (req,res,next)=>{
    try{
        const allTransaction = await transactions.find({});
        res.status(200).json(allTransaction);
      }
       catch(err){ 
        next(err);
      }
}

 const makePayment = async (req,res,next)=>{
    try{
        await transactions.create(req.body);
        res.status(201).json(`Donation successfully processed`);
      }
       catch(err){
        next(err);
      }
}

 const deleteTransaction = async (req,res, next)=>{
    try{
       await transactions.findByIdAndDelete(req.params.id);
        res.status(201).json(`Transaction successfully deleted`);
      }
       catch(err){
        next(err);
      }
}



module.exports = {makePayment, getTransaction,getAllTransaction, deleteTransaction}
const express = require('express');
const app = express();
const dbConnect = require("./util/dbConect");
const dotenv = require("dotenv");
const cookieParser= require("cookie-parser");
const cors= require("cors");
dotenv.config();

//ROUTES IMPORTATION
const arrivalRoute = require('./routes/location/arrival');
const departureRoute = require('./routes/location/departure');
const ticketRoute = require('./routes/ticket');

const PORT = 5100 || process.env.PORT ;

//DB INITIALIZATION
dbConnect();

//Middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());

//ROUTES
app.use('/arrival', arrivalRoute);
app.use('/departure', departureRoute);
app.use('/ticket', ticketRoute);

//ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
  const errorCode = err.status || 500;
  const errorMessage = err.message || "Error Occured!";
  return res.status(errorCode).json({
    success: false,
    message: errorMessage,
    code: errorCode,
    stack: err.stack
  })
})


app.listen(PORT, ()=>{
    console.log(`server connected on PORT ${PORT}`);
})


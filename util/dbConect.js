const mongoose = require( "mongoose");

mongoose.set('strictQuery', false);
 const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }

  mongoose.connection.on("disconnected", (err) => {
    console.log(err);
  });
};



module.exports = dbConnect;

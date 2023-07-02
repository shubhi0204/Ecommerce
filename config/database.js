const mongoose = require("mongoose");
// DataBase Connection for storage
const connectDB = async () => {
  try{
      const conn = await mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce');
      console.log(`MongoDB connected  successfull : ${conn.connection.host}`);
  }catch(err){
      console.log(`Error In Connecting MongoDB: ${err}`);
      process.exit(1);
  }
};
module.exports = connectDB;
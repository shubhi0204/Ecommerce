const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
dotenv.config({ path: "config/config.env" });
PORT = process.env.port || 5000
  //Handling Uncaught Exception

  process.on("uncaughtException", (err) => {
    console.log(`Error:${err.message}`);
    console.log('Shutting down the server due to uncaught error');
    process.exit(1);
  })
//config


connectDB();

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});



// UNHANDLED PROMISE ERROR
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log('Shutting down the server due to unhandled promise rejection');
  server.close(() => {

    process.exit(1);
  });
});

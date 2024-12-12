//Aproach - 1

// this is contradicting with code consistency require vs import so we'll use different:
//require('dotend).config({path: './env'})

//so-->
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
    path: "./env",
  });
  
connectDB();

//Another Approach to connect with DB:
/*
import express from "express";
const app = express();

(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listenining on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR: " + error);
    throw error;
  }
})();

*/

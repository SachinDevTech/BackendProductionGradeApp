import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}${DB_NAME}`
    );
    console.log(
      `\n Connection established!! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection ERROR: " + error);
    process.exit(1); // Read docs - Part of nodejs
  }
};

export default connectDB;

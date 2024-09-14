import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotnenv from "dotenv";
dotnenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
    console.log("Connected to apexstream");
  } catch (error) {
    console.log("MongoDB error", error);
    process.exit(1);
  }
};

export default connectDB;

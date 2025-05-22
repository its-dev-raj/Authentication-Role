import mongoose from "mongoose";

export function connectDb() {
  mongoose.connect(process.env.MONGODB_URI, { dbName: process.env.DB_NAME });
  console.log("mongo db is connected");
}

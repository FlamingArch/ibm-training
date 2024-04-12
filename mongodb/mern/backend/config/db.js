import mongoose from "mongoose";

let username = "admin1234"; // process.env.MONGODB_USERNAME;
let password = "admin1234"; // process.env.MONGODB_PASSWORD;

const URI = `mongodb+srv://${username}:${password}@mern-cluster.bgh2jkj.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Cluster`;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(URI);
    console.log(`Connected to MongoDB: ${connection.connection.host}`);
  } catch (error) {
    console.log(`Failed to Connect to MongoDB: ${error}`);
  }
};

export default connectDB;

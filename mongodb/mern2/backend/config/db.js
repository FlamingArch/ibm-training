import mongoose from "mongoose";
const connectDB = async () => {
  try {
    // the connect function will return a promise and will connect to the database
    const conn = await mongoose.connect(
      `mongodb+srv://admin123:adminpass123@mern-cluster.bgh2jkj.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Cluster`
    ); //connecting express to models database
    console.log(`Connected to mongodb ${conn.connection.host}`);
  } catch (err) {
    console.log(`Failed to connect to mongodb ${err.message}`);
  }
};

export default connectDB;

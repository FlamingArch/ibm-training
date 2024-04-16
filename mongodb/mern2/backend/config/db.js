import mongoose from 'mongoose';
const connectDB = async ()=>{
    try {// the connect function will return a promise and will connect to the database
        const conn = await mongoose.connect(`mongodb+srv://admin1234:admin1234@mern-cluster.5fdjdem.mongodb.net/merndb?retryWrites=true&w=majority&appName=mern-cluster`)    //connecting express to models database
        console.log(`Connected to mongodb ${conn.connection.host}`)
    } catch(err){
        console.log(`Failed to connect to mongodb ${err.message}`)
    }
}

export default connectDB
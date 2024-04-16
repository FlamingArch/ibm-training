import express from "express";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorMiddleware.js";
import cors from 'cors'

const app = express()   //express constructor called //its the entry point

app.use(express.json())     //app.use is the MiddleWare

app.use(cors())     //(cross origin resource sharing) acts as a middleware

app.use('/api/products',productRoutes)   //any routes ending with /api/products will be routed to productRoutes

app.use('/api/users',userRoutes)

connectDB() //we must call the connectDB //untill and unless we call it, we wont be able to make connection
//make sure app.use(errorHandler) is added after the connection is established
app.use(errorHandler)   //we r declaring that errorHandler globally will intercept every routes

app.listen(9999,()=> console.log('server started'))




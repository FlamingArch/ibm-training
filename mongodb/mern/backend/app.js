import express from "express";
import productRoutes from "./routes/productsRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(errorHandler);
app.use(`/api/products`, productRoutes);
app.use(`/api/user`, userRoutes);

connectDB();

app.listen(9999, () =>
  console.log(`Server started on port 9999: http://localhost:9999`)
);

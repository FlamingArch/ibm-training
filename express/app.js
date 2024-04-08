import express from "express";
import productRoutes from "./routes/product.js";

const app = express();

app.use("/ibm", productRoutes);

app.listen(9999, () => {
  console.log("Server Started on port 9999: http://localhost:9999");
});

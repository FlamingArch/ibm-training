import express from "express";
import products from "../products.js";

const router = express.Router();

router.get("/api/products", (req, res) => {
  res.json(products);
});


export default router;

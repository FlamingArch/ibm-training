import express from "express";
import products from "../products.js";

const router = express.Router();

router.get("/api/products", (req, res) => {
  res.json(products);
});

router.post("/api/products", (req, res) => {
  const newProduct = req.body;

  if (!newProduct.productName || !newProduct.price) {
    res.status(400).json({ message: "Product Name and Price is required" });
  }
  products.push(newProduct);
  res.json(products);
});

export default router;

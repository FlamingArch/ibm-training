import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const products = await Product.findOne({ productId });
  if (!products) {
    res.status(404);
    throw new Error("Product with ${id} not found");
  } else res.status(200).json(products);
});

const addNewProduct = asyncHandler(async (req, res) => {
  let newProduct = req.body;

  if (!newProduct.productName || !newProduct.price) {
    res.status(400).json({ msg: "Product Name and Price is mandatory" });
  }

  newProduct = await Product.create(newProduct);
  res.status(201).json(newProduct);
});

const updateExistingProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const exists = await Product.findById(id);

  if (!exists) {
    res.status(400).json({ msg: `Product ${id} not found` });
  }

  const productToBeUpdated = req.body;
  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    productToBeUpdated
  );
  res.status(200).json(updatedProduct);
});

const deleteProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);

  if (!product) {
    res.status(404);
    throw new Error(`Product with ${id} now found`);
  }

  await product.deleteOne();
  res.status(200).json({ deleted: true });
});

export {
  getProducts,
  addNewProduct,
  updateExistingProduct,
  deleteProduct,
  getProductById,
};

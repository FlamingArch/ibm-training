import express from "express";
import {
  getProducts,
  addNewProduct,
  updateExistingProduct,
  deleteProduct,
} from "../controllers/productController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getProducts);
router.route("/").post(protect, addNewProduct);
router.route("/:id").put(protect, updateExistingProduct);
router.route("/:id").delete(protect, deleteProduct);

export default router;

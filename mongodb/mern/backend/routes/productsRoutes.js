import express from "express";
import {
  getProducts,
  addNewProduct,
  updateExistingProduct,
  deleteProduct,
  getProductById,
} from "../controllers/productController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getProducts);
router.route("/").post(addNewProduct);
router.route("/:id").get(getProductById);
router.route("/:id").put(protect, updateExistingProduct);
router.route("/:id").delete(protect, deleteProduct);

export default router;

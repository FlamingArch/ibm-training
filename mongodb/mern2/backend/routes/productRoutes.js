//this is for making the routes in mongo// raasta batayega chalne ka

import express from 'express'
import { addNewProduct, deleteProduct, getProductById, getProducts, updateExistingProduct } from '../controllers/productController.js'

import protect from "../middleware/authMiddleware.js"

const router = express.Router()

router.route('/').get(getProducts)   //any url ending with slash will get the products but first it will check the token for authentication
router.route('/:id').get(getProductById)
router.route('/').post(protect,addNewProduct)
router.route('/:id').put(protect,updateExistingProduct) //:id we need to specify a path parameter but first it will check the token for authentication
router.route('/:id').delete(protect,deleteProduct)  //:id we need to specify a path parameter but first it will check the token for authentication

export default router
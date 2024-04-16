//controller is for interacting with database
import Product from '../models/productModel.js'

import asyncHandler from 'express-async-handler'

const getProducts = asyncHandler(async (req,res) =>{
    const products = await Product.find({})  //in mongoshell we did db.product.find({})
    res.status(200).json(products)
})

const getProductById = asyncHandler(async (req,res) =>{
    const id = req.params.id    //params to extract parameter from url
    const product = await Product.findOne({productId:id})   //using findOne istead of findById to get only 1 object instead of array of objects
    res.status(200).json(product)
})

const addNewProduct = asyncHandler(async(req,res)=>{// post is used when we are sending or inserting products
    let newProduct = req.body   //request of body will take the raw value we put in postman
    if(!newProduct.productName || !newProduct.price){
        res.status(400).json({msg:'Product Name and Price is mandatory'})
    }

    newProduct = await Product.create(newProduct)   //instead of insertOne() we need to use create()
    res.status(201).json(newProduct)
})

const updateExistingProduct = asyncHandler(async(req,res)=>{    //put is used for updating

    const id = req.params.id    //params to extract parameter from url
    const exists = await Product.findById(id)
    if(!exists){
        res.status(404).json({msg: `Product ${id} does not exist`})
    }
    const productToBeUpdated = req.body
    const updatedProduct = await Product.findByIdAndUpdate(id,productToBeUpdated)
    res.status(200).json(updatedProduct)
})

const deleteProduct = asyncHandler(async(req,res)=>{
  
    const id = req.params.id    //params to extract parameter from url
    const product = await Product.findById(id)
    if(!product){
        res.status(404)
        throw new Error(`Product with ${id} not found`)
        
    }
    await product.deleteOne()
    res.status(200).json('Product Deleted')
})


export{ 
    getProducts,
    getProductById, 
    addNewProduct, 
    updateExistingProduct, 
    deleteProduct 
}//this is not a default module but is a named module thats why we used curly braces
//exporting this as a named module

import asyncHandler from 'express-async-handler'

import User from "../models/userModel.js"

import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const loginUser = asyncHandler(async (req,res) =>{  //validating username and password, sign-in

    let {email, password} = req.body
    
    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password,user.password))){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)

        })
    }
    else{
        res.status(401)
        throw new Error("Invalid Credentials")
    }
})
    
const registerUser = asyncHandler(async (req,res) =>{   //signout

    let {name, email, password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please include all fields")
    }

    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error ("user with email already exists")
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    const user = await User.create({name,email,password:hashedPassword})

    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user,id)
    })
})

const generateToken = id =>{
    return jwt.sign({id},'abcd1234',{expiresIn: '30d'})
}

export {
    loginUser,
    registerUser
}
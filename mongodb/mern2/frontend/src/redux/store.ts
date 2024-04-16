import { configureStore } from "@reduxjs/toolkit";
import ProductsListReducer from "./productListSlice"
import authReducer from "./authSlice"

//store in itself cannot be modified but the properties in it can be
const store= configureStore({
    reducer:{
    products: ProductsListReducer,  //this is where we map the products
    auth: authReducer   //for login/logout
    }
})

export type AppDispatch= typeof store.dispatch //store.dispatch to dispatch the actions

export default store //to connect components

export type RootState= ReturnType<typeof store.getState>
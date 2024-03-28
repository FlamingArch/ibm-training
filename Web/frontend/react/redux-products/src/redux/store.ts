import { configureStore } from "@reduxjs/toolkit";
import ProductsListReducer from "./productListSlice"

const store = configureStore({
    reducer: {
        products: ProductsListReducer  //this is where we map the products
    }
})

export type AppDispatch = typeof store.dispatch //store.dispatch to dispatch the actions

export default store //to connect components

export type RootState = ReturnType<typeof store.getState>

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IProduct from "../model/product";
import httpClient from "../apiClient/httpClient";


export const fetchProducts = //fetching the data from client here
    createAsyncThunk<IProduct[]>("products/list", async () =>   //createAsyncThunk takes two parameters, string and a callback
        await httpClient.get(`http://localhost:3000/products`)
    )

type AppStateType = {
    products: IProduct[]
    error: boolean
}

const initialState: AppStateType = { //if anything goes wrong the error will be used
    products: [],
    error: false
}

export const productsListSlice = createSlice({ //this slice is for productsList
    name: 'products',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => { //when we are performing async operations and we wanna know the promise states we use extraReducers
        builder.addCase(fetchProducts.fulfilled, (state, action) => {//in the current the products will be empty array
            state.products = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state) => { //in the current the products will be empty array
            state.error = true
        })// we use extraReducers to resolve a promise
    },
})

export default productsListSlice.reducer

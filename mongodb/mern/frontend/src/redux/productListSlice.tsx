import { createSelector, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IProduct from "../model/product";
import httpClient from "../apiClient/httpClient";

export const fetchProducts = 
//createasyncthunk takes a 2 params - string, callback fn. it is used for handling all async operations
createAsyncThunk<IProduct[],string>("products/list", async (searchKey: string="") => 
await httpClient.get(`http://localhost:4200/products?productName=${searchKey}`))

type AppStateType = {
    products: IProduct[]
    error: boolean
    searchKey:string
}

const initialState : AppStateType = {
    products:[],
    error:false,
    searchKey:""
}

export const productsListSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setSearchKey(state,action) {
            state.searchKey=action.payload
          }
        
    },
    extraReducers:(builder)=>{
        //to look for promise states whether it has failed, or is pending, etc.
        //to resolve async thunk we use extrareducers
        builder.addCase(fetchProducts.fulfilled,(state,action) => {state.products = action.payload})
        builder.addCase(fetchProducts.rejected,(state) => {state.error=true})
    },

})

export const { setSearchKey } = productsListSlice.actions
export default productsListSlice.reducer
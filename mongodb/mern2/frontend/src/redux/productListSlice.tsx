import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IProduct from "../model/product";
import httpClient from "../apiClient/httpClient";


export const fetchProducts= //fetching the data from client here
createAsyncThunk<IProduct[], string>("products/search",async(searchKey: string = "")=>  //takes input as a string and return an IProduct array
    await httpClient.get(`http://localhost:9999/api/products?productName=${searchKey}`)
)

type AppStateType={
    products: IProduct[]
    error:boolean
    searchKey: string
}

const initialState: AppStateType={ //if anything goes wrong the error will be used
    products:[],
    error:false,
    searchKey: ""
}

export const productsListSlice= createSlice({ //this slice is for productsList
    name:'products', //using createSlice we create reducers
    initialState:initialState,
    reducers:{ //configuring the reducer, we left it empty because we are fetching the data from the server
        setSearchKey: (state, action) =>{
            state.searchKey = action.payload
        }
    },
    extraReducers:(builder)=>{ //when we are performing async operations and we wanna know the promise states we use extraReducers
        builder.addCase(fetchProducts.fulfilled,(state,action)=> {//in the current the products will be empty array
        state.products=action.payload
         })
        builder.addCase(fetchProducts.rejected,(state)=>{ //in the current the products will be empty array
        state.error=true
    })// we use extraReducers to resolve a promise (CreateAsyncThunk)
    },
})


export const {setSearchKey}= productsListSlice.actions
export default productsListSlice.reducer


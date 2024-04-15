import { configureStore } from "@reduxjs/toolkit";
import ProductsListReducer from "./productListSlice";
import authService from "./authService";

const store = configureStore({
  reducer: {
    products: ProductsListReducer,
    authService: authService,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;

export type RootState = ReturnType<typeof store.getState>;

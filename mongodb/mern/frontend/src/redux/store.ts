import { configureStore } from "@reduxjs/toolkit";
import ProductsListReducer from "./productListSlice";
import authReducer from "./authSlice";
const store = configureStore({
  reducer: {
    products: ProductsListReducer,
    user: authReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export default store;
export type RootState = ReturnType<typeof store.getState>;

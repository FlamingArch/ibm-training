import { FC, ReactElement } from "react";
import App from "../App"
import { useNavigate, Route, Routes } from "react-router-dom";
import ProductsList from "../components/productsList";
import { Home } from "../components/home";
import { ProductDetails } from "../components/productDetails";
import { ProductEdit } from "../components/productEdit";
import httpClient from "../apiClient/httpClient";
import { NewProductData } from "../components/types";
import PrivateRoute from "../components/PrivateRoute";
import Login from "../components/Login";

export const AppRoutes:FC<any>=(): ReactElement=>{ //reaturs a react element with no props
    const navigate= useNavigate()
    async function handleUpdate(newProductData:NewProductData){
        await httpClient.put('http://localhost:9999/api/products',newProductData)
        navigate('/products')
    }
    return(
        <App>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                
                <Route path="/products" element={<ProductsList/>}/>
                <Route path="/products/:id" element={<ProductDetails/>}/>
                <Route path="/products/:id/edit" element={
                    <PrivateRoute>
                        <ProductEdit/>{/*wrapping the productEdit in PrivateRoute,and that is the children, children type is reactNode*/}
                    </PrivateRoute>
                }/>
                
            </Routes>
        </App>
    )
}
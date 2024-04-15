import { FC, ReactElement } from "react";
import App from "../App"
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductsList from "../components/productsList";
import { Home } from "../components/home";
import { ProductDetails } from "../components/productDetails";
import { ProductEdit } from "../components/productEdit";
import { NewProductData } from "../components/types";
import httpClient from "../apiClient/httpClient";
import PrivateRoute from "../components/privateRoute";

export const AppRoutes: FC<any> = (): ReactElement => { //returns a react element with no props

    const navigate = useNavigate()

    async function handleUpdate(NewProductData: NewProductData) {
        await httpClient.put('http://localhost:4200/products', NewProductData) //put takes 2 arguments ie. url and data
        navigate('/products')
    }
    return (
        <App>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductsList />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/products/:id/edit" >
                    <PrivateRoute>
                        <ProductEdit />
                    </PrivateRoute>
                </Route>
            </Routes>
        </App>
    )
}

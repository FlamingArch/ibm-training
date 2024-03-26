import { Route, Routes } from "react-router-dom"
import App from "../App"
import ProductsList from "../components/ProductList"

export const AppRoutes: React.FC<any> = (): React.ReactElement => {
  return <App>
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/products/:id" element={<ProductsList />} />
      <Route path="/products/:id/edit" element={<ProductsList />} />
    </Routes>
  </App>
}

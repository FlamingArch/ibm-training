import { Route, Routes } from 'react-router-dom'
import AppScaffold from './app'
import PageHome from './routes/home'
import PageProducts from './routes/products'
import ProductDetails from './routes/details'
import PageEdit from './routes/edit'

function AppRoutes() {
  return (
    <AppScaffold>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/products" element={<PageProducts />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/:id/edit" element={<PageEdit onSave={() => { }} />} />
      </Routes>
    </AppScaffold>
  )
}

export default AppRoutes

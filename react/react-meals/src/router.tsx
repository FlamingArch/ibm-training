import { Route, Routes } from "react-router-dom"
import PageHome from "./routes/home"
import PageCart from "./routes/cart"

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/cart" element={<PageCart />} />
    </Routes>
  )
}

export default AppRouter

import { Routes, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

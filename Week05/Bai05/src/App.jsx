import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";

export default function App() {
  return (
    <Routes>
      <Route path="/product" element={<ProductDetail />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

import { useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Product Detail</h1>
      <button onClick={() => navigate("/checkout")}>Mua hàng </button>
    </div>
  );
}

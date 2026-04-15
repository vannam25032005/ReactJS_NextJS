import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import products from "../components/productsData";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h1>Không tìm thấy sản phẩm</h1>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: ${product.price}</p>

      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Giỏ hàng</h1>

      {cart.length === 0 ? (
        <p>Chưa có sản phẩm nào</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}

      <button onClick={() => navigate("/checkout")}>Checkout</button>
    </div>
  );
}

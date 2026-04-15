import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const { clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    clearCart();
  };

  return (
    <div>
      <h1>Thanh toán</h1>
      <p>Thanh toán thành công</p>
      <button onClick={handleCheckout}>Xác nhận</button>
    </div>
  );
}

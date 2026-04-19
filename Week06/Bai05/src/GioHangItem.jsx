import { useDispatch } from "react-redux";
import { tangSoLuong, giamSoLuong } from "./store";

function GioHangItem({ sanPham }) {
  const dieuPhoi = useDispatch();

  return (
    <div>
      <span>
        {sanPham.ten} - {sanPham.gia} VND - So luong: {sanPham.soLuong}
      </span>
      <button onClick={() => dieuPhoi(tangSoLuong(sanPham.id))}>+</button>
      <button onClick={() => dieuPhoi(giamSoLuong(sanPham.id))}>-</button>
    </div>
  );
}

export default GioHangItem;

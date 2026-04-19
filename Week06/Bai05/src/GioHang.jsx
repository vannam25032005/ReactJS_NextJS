import { useSelector } from "react-redux";
import GioHangItem from "./GioHangItem";

function GioHang() {
  const danhSach = useSelector((state) => state.gioHang.danhSach);

  const tongTien = danhSach.reduce((tong, sanPham) => {
    return tong + sanPham.gia * sanPham.soLuong;
  }, 0);

  return (
    <div>
      <h2>Gio hang</h2>
      {danhSach.length === 0 ? (
        <p>Chua co san pham nao</p>
      ) : (
        <>
          {danhSach.map((sanPham) => (
            <GioHangItem key={sanPham.id} sanPham={sanPham} />
          ))}
          <h3>Tong tien: {tongTien} VND</h3>
        </>
      )}
    </div>
  );
}

export default GioHang;

import { useDispatch } from "react-redux";
import { themVaoGio } from "./store";

const danhSachSanPhamMau = [
  { id: 1, ten: "Ao", gia: 100000 },
  { id: 2, ten: "Quan", gia: 200000 },
  { id: 3, ten: "Giay", gia: 300000 },
];

function DanhSachSanPham() {
  const dieuPhoi = useDispatch();

  return (
    <div>
      <h2>Danh sach san pham</h2>
      {danhSachSanPhamMau.map((sanPham) => (
        <div key={sanPham.id}>
          <span>
            {sanPham.ten} - {sanPham.gia} VND
          </span>
          <button onClick={() => dieuPhoi(themVaoGio(sanPham))}>
            Them vao gio
          </button>
        </div>
      ))}
    </div>
  );
}

export default DanhSachSanPham;

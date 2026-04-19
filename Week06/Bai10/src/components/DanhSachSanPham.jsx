import { useCart } from "../context/CartContext";
import { useProduct } from "../context/ProductContext";
import TaiDuLieu from "./TaiDuLieu";
import Loi from "./Loi";

function DanhSachSanPham() {
  const { duLieu, dangTai, loi } = useProduct();
  const { themVaoGio } = useCart();

  if (dangTai) return <TaiDuLieu />;
  if (loi) return <Loi noiDung={loi} />;

  return (
    <div className="hop">
      <h2>Danh sach san pham</h2>
      <div className="luoi">
        {duLieu.map((sanPham) => (
          <div className="the" key={sanPham.id}>
            <img src={sanPham.thumbnail} alt={sanPham.title} />
            <h3>{sanPham.title}</h3>
            <p>{sanPham.price} USD</p>
            <button onClick={() => themVaoGio(sanPham)}>Them vao gio</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DanhSachSanPham;

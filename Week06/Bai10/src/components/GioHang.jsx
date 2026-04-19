import { useCart } from "../context/CartContext";

function GioHang() {
  const { gioHang, tongTien, tangSoLuong, giamSoLuong } = useCart();

  return (
    <div className="hop">
      <h2>Gio hang</h2>

      {gioHang.length === 0 ? (
        <p>Chua co san pham nao</p>
      ) : (
        <>
          {gioHang.map((sanPham) => (
            <div className="dongGioHang" key={sanPham.id}>
              <div>
                <p>{sanPham.title}</p>
                <p>{sanPham.price} USD</p>
              </div>
              <div className="cumNut">
                <button onClick={() => giamSoLuong(sanPham.id)}>-</button>
                <span>{sanPham.soLuong}</span>
                <button onClick={() => tangSoLuong(sanPham.id)}>+</button>
              </div>
            </div>
          ))}
          <h3>Tong tien: {tongTien} USD</h3>
        </>
      )}
    </div>
  );
}

export default GioHang;

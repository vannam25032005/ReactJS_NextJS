import { useAuth } from "./context/AuthContext";
import { useCart } from "./context/CartContext";
import DangNhap from "./components/DangNhap";
import DanhSachSanPham from "./components/DanhSachSanPham";
import GioHang from "./components/GioHang";
import Loi from "./components/Loi";
import ThongBao from "./components/ThongBao";

function App() {
  const { loi: loiAuth, thongBao: thongBaoAuth } = useAuth();
  const { thongBao: thongBaoCart } = useCart();

  return (
    <div className="ungDung">
      <h1>Mini App Quan Ly San Pham</h1>
      <DangNhap />
      {loiAuth && <Loi noiDung={loiAuth} />}
      <DanhSachSanPham />
      <GioHang />
      <ThongBao noiDung={thongBaoAuth || thongBaoCart} />
    </div>
  );
}

export default App;

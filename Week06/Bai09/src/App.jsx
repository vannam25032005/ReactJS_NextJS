import { useSelector } from "react-redux";
import DangNhap from "./DangNhap";
import ThongTinNguoiDung from "./ThongTinNguoiDung";

function App() {
  const token = useSelector((state) => state.xacThuc.token);

  return (
    <div>
      <h1>Auth API Token</h1>
      {!token && <DangNhap />}
      <ThongTinNguoiDung />
    </div>
  );
}

export default App;

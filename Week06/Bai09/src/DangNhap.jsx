import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dangNhapApi } from "./store";

function DangNhap() {
  const dieuPhoi = useDispatch();
  const { loading, error } = useSelector((state) => state.xacThuc);

  const [tenDangNhap, ganTenDangNhap] = useState("emilys");
  const [matKhau, ganMatKhau] = useState("emilyspass");

  const xuLyDangNhap = (e) => {
    e.preventDefault();
    dieuPhoi(
      dangNhapApi({
        username: tenDangNhap,
        password: matKhau,
      }),
    );
  };

  return (
    <form onSubmit={xuLyDangNhap}>
      <h2>Dang nhap</h2>
      <input
        type="text"
        placeholder="Nhap username"
        value={tenDangNhap}
        onChange={(e) => ganTenDangNhap(e.target.value)}
      />
      <input
        type="password"
        placeholder="Nhap mat khau"
        value={matKhau}
        onChange={(e) => ganMatKhau(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Dang dang nhap..." : "Dang nhap"}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default DangNhap;

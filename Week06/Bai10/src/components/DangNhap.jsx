import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function DangNhap() {
  const { token, nguoiDung, dangNhap, dangXuat, dangTai } = useAuth();
  const [tenDangNhap, ganTenDangNhap] = useState("emilys");
  const [matKhau, ganMatKhau] = useState("emilyspass");

  const xuLyDangNhap = (e) => {
    e.preventDefault();
    dangNhap(tenDangNhap, matKhau);
  };

  if (token && nguoiDung) {
    return (
      <div className="hop">
        <h2>Thong tin dang nhap</h2>
        <p>
          Xin chao, {nguoiDung.firstName} {nguoiDung.lastName}
        </p>
        <p>Email: {nguoiDung.email}</p>
        <button onClick={dangXuat}>Dang xuat</button>
      </div>
    );
  }

  return (
    <form className="hop" onSubmit={xuLyDangNhap}>
      <h2>Dang nhap</h2>
      <input
        type="text"
        value={tenDangNhap}
        onChange={(e) => ganTenDangNhap(e.target.value)}
        placeholder="Nhap username"
      />
      <input
        type="password"
        value={matKhau}
        onChange={(e) => ganMatKhau(e.target.value)}
        placeholder="Nhap mat khau"
      />
      <button type="submit" disabled={dangTai}>
        {dangTai ? "Dang dang nhap..." : "Dang nhap"}
      </button>
    </form>
  );
}

export default DangNhap;

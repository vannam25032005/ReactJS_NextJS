import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dangNhap, dangXuat } from "./store";

function DangNhap() {
  const [tenDangNhap, ganTenDangNhap] = useState("");
  const dieuPhoi = useDispatch();
  const thongTin = useSelector((state) => state.nguoiDung.thongTin);

  const xuLyDangNhap = () => {
    if (tenDangNhap.trim() === "") return;
    dieuPhoi(
      dangNhap({
        ten: tenDangNhap,
      }),
    );
    ganTenDangNhap("");
  };

  const xuLyDangXuat = () => {
    dieuPhoi(dangXuat());
  };

  return (
    <div>
      {thongTin ? (
        <>
          <h2>Xin chao, {thongTin.ten}</h2>
          <button onClick={xuLyDangXuat}>Dang xuat</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Nhap username"
            value={tenDangNhap}
            onChange={(e) => ganTenDangNhap(e.target.value)}
          />
          <button onClick={xuLyDangNhap}>Dang nhap</button>
        </>
      )}
    </div>
  );
}

export default DangNhap;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { capNhatTuKhoa, timKiemSanPham, xoaKetQua } from "./store";

function ThanhTimKiem() {
  const dieuPhoi = useDispatch();
  const tuKhoa = useSelector((state) => state.timKiem.tuKhoa);

  useEffect(() => {
    const boDem = setTimeout(() => {
      if (tuKhoa.trim() !== "") {
        dieuPhoi(timKiemSanPham(tuKhoa));
      } else {
        dieuPhoi(xoaKetQua());
      }
    }, 500);

    return () => clearTimeout(boDem);
  }, [tuKhoa, dieuPhoi]);

  return (
    <input
      type="text"
      placeholder="Nhap tu khoa tim kiem"
      value={tuKhoa}
      onChange={(e) => dieuPhoi(capNhatTuKhoa(e.target.value))}
    />
  );
}

export default ThanhTimKiem;

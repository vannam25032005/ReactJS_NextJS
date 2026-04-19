import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { anThongBao } from "./store";

function Toast() {
  const dieuPhoi = useDispatch();
  const { noiDung, hienThi } = useSelector((state) => state.thongBao);

  useEffect(() => {
    if (hienThi) {
      const boDem = setTimeout(() => {
        dieuPhoi(anThongBao());
      }, 3000);

      return () => clearTimeout(boDem);
    }
  }, [hienThi, dieuPhoi]);

  if (!hienThi) return null;

  return <div className="hopThongBao">{noiDung}</div>;
}

export default Toast;

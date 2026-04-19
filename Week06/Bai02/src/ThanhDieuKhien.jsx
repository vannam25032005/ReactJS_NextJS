import { useDispatch, useSelector } from "react-redux";
import { doiGiaoDien } from "./store";

function ThanhDieuKhien() {
  const dieuPhoi = useDispatch();
  const cheDo = useSelector((state) => state.giaoDien.cheDo);

  return (
    <button onClick={() => dieuPhoi(doiGiaoDien())}>
      Chuyen sang {cheDo === "light" ? "Dark" : "Light"}
    </button>
  );
}

export default ThanhDieuKhien;

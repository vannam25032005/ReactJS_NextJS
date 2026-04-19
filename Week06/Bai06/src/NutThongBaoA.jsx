import { useDispatch } from "react-redux";
import { hienThongBao } from "./store";

function NutThongBaoA() {
  const dieuPhoi = useDispatch();

  return (
    <button onClick={() => dieuPhoi(hienThongBao("Thong bao tu Component A"))}>
      Gui thong bao A
    </button>
  );
}

export default NutThongBaoA;

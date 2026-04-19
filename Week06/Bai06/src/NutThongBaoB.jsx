import { useDispatch } from "react-redux";
import { hienThongBao } from "./store";

function NutThongBaoB() {
  const dieuPhoi = useDispatch();

  return (
    <button onClick={() => dieuPhoi(hienThongBao("Thong bao tu Component B"))}>
      Gui thong bao B
    </button>
  );
}

export default NutThongBaoB;

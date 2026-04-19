import { useState } from "react";
import { useDispatch } from "react-redux";
import { themCongViec } from "./store";

function TodoInput() {
  const [noiDung, ganNoiDung] = useState("");
  const dieuPhoi = useDispatch();

  const xuLyThem = () => {
    if (noiDung.trim() === "") return;
    dieuPhoi(themCongViec(noiDung));
    ganNoiDung("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhap cong viec"
        value={noiDung}
        onChange={(e) => ganNoiDung(e.target.value)}
      />
      <button onClick={xuLyThem}>Them</button>
    </div>
  );
}

export default TodoInput;

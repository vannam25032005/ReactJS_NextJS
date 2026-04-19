import { useState } from "react";
import { useDispatch } from "react-redux";
import { xoaCongViec, suaCongViec } from "./store";

function TodoItem({ congViec }) {
  const [dangSua, ganDangSua] = useState(false);
  const [noiDungMoi, ganNoiDungMoi] = useState(congViec.noiDung);
  const dieuPhoi = useDispatch();

  const xuLyLuu = () => {
    if (noiDungMoi.trim() === "") return;
    dieuPhoi(
      suaCongViec({
        id: congViec.id,
        noiDungMoi: noiDungMoi,
      }),
    );
    ganDangSua(false);
  };

  return (
    <li>
      {dangSua ? (
        <>
          <input
            type="text"
            value={noiDungMoi}
            onChange={(e) => ganNoiDungMoi(e.target.value)}
          />
          <button onClick={xuLyLuu}>Luu</button>
        </>
      ) : (
        <>
          <span>{congViec.noiDung}</span>
          <button onClick={() => ganDangSua(true)}>Sua</button>
        </>
      )}
      <button onClick={() => dieuPhoi(xoaCongViec(congViec.id))}>Xoa</button>
    </li>
  );
}

export default TodoItem;

import { useDispatch, useSelector } from "react-redux";
import { dangXuat, layThongTinNguoiDung } from "./store";

function ThongTinNguoiDung() {
  const dieuPhoi = useDispatch();
  const { token, nguoiDung, loading, error } = useSelector(
    (state) => state.xacThuc,
  );

  if (!token) {
    return <p>Chua dang nhap</p>;
  }

  return (
    <div>
      <h2>Da co token</h2>
      <p>Token: {token}</p>
      <button onClick={() => dieuPhoi(layThongTinNguoiDung())}>
        Lay thong tin user
      </button>
      <button onClick={() => dieuPhoi(dangXuat())}>Dang xuat</button>

      {loading && <p>Dang tai...</p>}
      {error && <p>{error}</p>}

      {nguoiDung && (
        <div>
          <h3>Thong tin nguoi dung</h3>
          <p>Id: {nguoiDung.id}</p>
          <p>Ten: {nguoiDung.firstName}</p>
          <p>Ho: {nguoiDung.lastName}</p>
          <p>Email: {nguoiDung.email}</p>
        </div>
      )}
    </div>
  );
}

export default ThongTinNguoiDung;

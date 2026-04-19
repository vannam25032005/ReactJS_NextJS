import { useSelector } from "react-redux";

function DanhSachKetQua() {
  const { ketQua, loading, error, tuKhoa } = useSelector(
    (state) => state.timKiem,
  );

  if (loading) {
    return <h3>Dang tim kiem...</h3>;
  }

  if (error) {
    return <h3>Loi: {error}</h3>;
  }

  if (tuKhoa.trim() === "") {
    return <h3>Hay nhap tu khoa</h3>;
  }

  if (ketQua.length === 0) {
    return <h3>Khong tim thay ket qua</h3>;
  }

  return (
    <ul>
      {ketQua.map((sanPham) => (
        <li key={sanPham.id}>
          <p>Ten: {sanPham.title}</p>
          <p>Gia: {sanPham.price}</p>
        </li>
      ))}
    </ul>
  );
}

export default DanhSachKetQua;

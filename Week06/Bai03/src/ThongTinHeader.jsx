import { useSelector } from "react-redux";

function ThongTinHeader() {
  const thongTin = useSelector((state) => state.nguoiDung.thongTin);

  return (
    <div>
      <h3>
        Header: {thongTin ? `Dang nhap voi ${thongTin.ten}` : "Chua dang nhap"}
      </h3>
    </div>
  );
}

export default ThongTinHeader;

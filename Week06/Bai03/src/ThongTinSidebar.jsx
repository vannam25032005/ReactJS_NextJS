import { useSelector } from "react-redux";

function ThongTinSidebar() {
  const thongTin = useSelector((state) => state.nguoiDung.thongTin);

  return (
    <div>
      <h3>Sidebar: {thongTin ? `Xin chao ${thongTin.ten}` : "Khach"}</h3>
    </div>
  );
}

export default ThongTinSidebar;

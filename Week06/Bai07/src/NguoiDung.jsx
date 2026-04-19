import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachNguoiDung } from "./store";
import Loading from "./Loading";
import Loi from "./Loi";
import DanhSachNguoiDung from "./DanhSachNguoiDung";

function NguoiDung() {
  const dieuPhoi = useDispatch();
  const { data, loading, error } = useSelector((state) => state.nguoiDung);

  useEffect(() => {
    dieuPhoi(layDanhSachNguoiDung());
  }, [dieuPhoi]);

  return (
    <div>
      <h1>Fetch Users</h1>
      {loading && <Loading />}
      {error && <Loi noiDung={error} />}
      {!loading && !error && <DanhSachNguoiDung duLieu={data} />}
    </div>
  );
}

export default NguoiDung;

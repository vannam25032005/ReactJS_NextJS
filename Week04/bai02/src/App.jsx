import { useState, useEffect } from "react";

export default function App() {
  const [danhSachNguoiDung, setDanhSachNguoiDung] = useState([]);
  const [dangTai, setDangTai] = useState(true);
  const [loi, setLoi] = useState(null);

  useEffect(() => {
    const layDuLieu = async () => {
      try {
        const phanHoi = await fetch(
          "https://jsonplaceholder.typicode.com/user",
        );
        if (!phanHoi.ok) throw new Error("Lỗi khi tải dữ liệu");

        const duLieu = await phanHoi.json();
        setDanhSachNguoiDung(duLieu);
      } catch (thongBaoLoi) {
        setLoi(thongBaoLoi.message);
      } finally {
        setDangTai(false);
      }
    };

    layDuLieu();
  }, []);

  if (dangTai) return <p>Loading...</p>;
  if (loi) return <p>Error: {loi}</p>;

  return (
    <div>
      <h2>Danh Sách Người Dùng</h2>
      <ul>
        {danhSachNguoiDung.map((nguoiDung) => (
          <li key={nguoiDung.id}>
            <strong>{nguoiDung.name}</strong> - {nguoiDung.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

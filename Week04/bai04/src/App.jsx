import { useState, useEffect } from "react";

export default function App() {
  const [danhSachBaiVietGoc, setDanhSachBaiVietGoc] = useState([]);
  const [tuKhoa, setTuKhoa] = useState("");
  const [dangTai, setDangTai] = useState(true);

  useEffect(() => {
    const layDanhSachBaiViet = async () => {
      try {
        const phanHoi = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const duLieu = await phanHoi.json();
        setDanhSachBaiVietGoc(duLieu);
      } catch (loi) {
        console.error("Lỗi:", loi);
      } finally {
        setDangTai(false);
      }
    };

    layDanhSachBaiViet();
  }, []);

  const danhSachHienThi = danhSachBaiVietGoc.filter((baiViet) =>
    baiViet.title.toLowerCase().includes(tuKhoa.toLowerCase()),
  );

  return (
    <div>
      <h2>Danh Sách Bài Viết</h2>
      <input
        type="text"
        placeholder="Tìm kiếm theo tiêu đề..."
        value={tuKhoa}
        onChange={(suKien) => setTuKhoa(suKien.target.value)}
      />

      {dangTai ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {danhSachHienThi.map((baiViet) => (
            <li key={baiViet.id}>{baiViet.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

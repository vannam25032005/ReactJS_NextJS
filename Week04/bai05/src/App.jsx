import { useState, useEffect } from "react";

export default function Bai5() {
  const [danhSachCongViec, setDanhSachCongViec] = useState([]);
  const [tenCongViec, setTenCongViec] = useState("");
  const [dangXuLy, setDangXuLy] = useState(false);

  useEffect(() => {
    const layDuLieu = async () => {
      try {
        const phanHoi = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5",
        );
        const duLieu = await phanHoi.json();
        setDanhSachCongViec(duLieu);
      } catch (loi) {
        console.error("Lỗi tải dữ liệu", loi);
      }
    };

    layDuLieu();
  }, []);

  const xuLyThemMoi = async (suKien) => {
    suKien.preventDefault();
    if (!tenCongViec.trim()) return;

    setDangXuLy(true);
    try {
      const phanHoi = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: tenCongViec,
            completed: false,
            userId: 1,
          }),
        },
      );

      const congViecMoi = await phanHoi.json();
      setDanhSachCongViec([congViecMoi, ...danhSachCongViec]);
      setTenCongViec("");
    } catch (loi) {
      console.error("Lỗi thêm mới", loi);
    } finally {
      setDangXuLy(false);
    }
  };

  const xuLyXoa = async (maCongViec) => {
    const danhSachCu = [...danhSachCongViec];
    setDanhSachCongViec(danhSachCongViec.filter((cv) => cv.id !== maCongViec));

    try {
      const phanHoi = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${maCongViec}`,
        {
          method: "DELETE",
        },
      );

      if (!phanHoi.ok) throw new Error("Xóa thất bại");
    } catch (loi) {
      console.error("Lỗi khi xóa, khôi phục UI", loi);
      setDanhSachCongViec(danhSachCu);
    }
  };

  return (
    <div>
      <h2>Quản Lý Công Việc (CRUD)</h2>

      <form onSubmit={xuLyThemMoi}>
        <input
          type="text"
          placeholder="Tên công việc mới..."
          value={tenCongViec}
          onChange={(suKien) => setTenCongViec(suKien.target.value)}
          disabled={dangXuLy}
        />
        <button type="submit" disabled={dangXuLy || !tenCongViec.trim()}>
          {dangXuLy ? "Đang xử lý..." : "Thêm mới"}
        </button>
      </form>

      <ul>
        {danhSachCongViec.map((congViec) => (
          <li key={congViec.id}>
            {congViec.title}
            <button
              onClick={() => xuLyXoa(congViec.id)}
              style={{ marginLeft: "10px", color: "red", cursor: "pointer" }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

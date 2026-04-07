import { useState, useEffect } from "react";

export default function App() {
  const [maNguoiDung, setMaNguoiDung] = useState("");
  const [thongTinNguoiDung, setThongTinNguoiDung] = useState(null);
  const [dangTai, setDangTai] = useState(false);
  const [loi, setLoi] = useState(null);

  useEffect(() => {
    if (!maNguoiDung) {
      setThongTinNguoiDung(null);
      setLoi(null);
      return;
    }

    const maSo = parseInt(maNguoiDung, 10);
    if (isNaN(maSo) || maSo < 1 || maSo > 10) {
      setThongTinNguoiDung(null);
      setLoi("User not found");
      return;
    }

    const layChiTietNguoiDung = async () => {
      setDangTai(true);
      setLoi(null);

      try {
        const phanHoi = await fetch(
          `https://jsonplaceholder.typicode.com/users/${maSo}`,
        );
        if (!phanHoi.ok) throw new Error("User not found");

        const duLieu = await phanHoi.json();
        setThongTinNguoiDung(duLieu);
      } catch (thongBaoLoi) {
        setThongTinNguoiDung(null);
        setLoi(thongBaoLoi.message);
      } finally {
        setDangTai(false);
      }
    };

    layChiTietNguoiDung();
  }, [maNguoiDung]);

  return (
    <div>
      <h2>Tìm Kiếm Người Dùng</h2>
      <input
        type="number"
        placeholder="Nhập ID (1-10)"
        value={maNguoiDung}
        onChange={(suKien) => setMaNguoiDung(suKien.target.value)}
      />

      {dangTai && <p>Loading...</p>}
      {loi && <p style={{ color: "red" }}>{loi}</p>}

      {thongTinNguoiDung && !dangTai && !loi && (
        <div>
          <p>
            <strong>Name:</strong> {thongTinNguoiDung.name}
          </p>
          <p>
            <strong>Phone:</strong> {thongTinNguoiDung.phone}
          </p>
          <p>
            <strong>Website:</strong> {thongTinNguoiDung.website}
          </p>
        </div>
      )}
    </div>
  );
}

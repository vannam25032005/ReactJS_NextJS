import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [danhSachNguoiDung, setDanhSachNguoiDung] = useState([]);

  useEffect(() => {
    const layDuLieu = async () => {
      const phanHoi = await fetch("https://jsonplaceholder.typicode.com/users");
      const duLieu = await phanHoi.json();
      setDanhSachNguoiDung(duLieu);
    };

    layDuLieu();
  }, []);

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

export default App;

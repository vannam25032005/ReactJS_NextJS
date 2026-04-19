import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, ganToken] = useState(localStorage.getItem("token") || null);
  const [nguoiDung, ganNguoiDung] = useState(null);
  const [dangTai, ganDangTai] = useState(false);
  const [loi, ganLoi] = useState(null);
  const [thongBao, ganThongBao] = useState("");

  const dangNhap = async (tenDangNhap, matKhau) => {
    try {
      ganDangTai(true);
      ganLoi(null);

      const phanHoi = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: tenDangNhap,
          password: matKhau,
        }),
      });

      if (!phanHoi.ok) {
        throw new Error("Dang nhap that bai");
      }

      const duLieu = await phanHoi.json();
      ganToken(duLieu.accessToken);
      localStorage.setItem("token", duLieu.accessToken);
      ganThongBao("Dang nhap thanh cong");
    } catch (loi) {
      ganLoi(loi.message);
    } finally {
      ganDangTai(false);
    }
  };

  const dangXuat = () => {
    ganToken(null);
    ganNguoiDung(null);
    localStorage.removeItem("token");
    ganThongBao("Dang xuat thanh cong");
  };

  const layThongTinNguoiDung = async () => {
    if (!token) return;

    try {
      ganDangTai(true);
      ganLoi(null);

      const phanHoi = await fetch("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!phanHoi.ok) {
        throw new Error("Khong lay duoc thong tin nguoi dung");
      }

      const duLieu = await phanHoi.json();
      ganNguoiDung(duLieu);
    } catch (loi) {
      ganLoi(loi.message);
    } finally {
      ganDangTai(false);
    }
  };

  useEffect(() => {
    if (token) {
      layThongTinNguoiDung();
    }
  }, [token]);

  useEffect(() => {
    if (!thongBao) return;
    const boDem = setTimeout(() => {
      ganThongBao("");
    }, 3000);
    return () => clearTimeout(boDem);
  }, [thongBao]);

  return (
    <AuthContext.Provider
      value={{
        token,
        nguoiDung,
        dangTai,
        loi,
        thongBao,
        dangNhap,
        dangXuat,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

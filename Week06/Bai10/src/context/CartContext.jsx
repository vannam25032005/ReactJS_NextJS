import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [gioHang, ganGioHang] = useState([]);
  const [thongBao, ganThongBao] = useState("");

  const themVaoGio = (sanPham) => {
    ganGioHang((mangCu) => {
      const sanPhamDaCo = mangCu.find((item) => item.id === sanPham.id);

      if (sanPhamDaCo) {
        return mangCu.map((item) =>
          item.id === sanPham.id
            ? { ...item, soLuong: item.soLuong + 1 }
            : item,
        );
      }

      return [...mangCu, { ...sanPham, soLuong: 1 }];
    });

    ganThongBao("Them vao gio hang thanh cong");
  };

  const tangSoLuong = (id) => {
    ganGioHang((mangCu) =>
      mangCu.map((item) =>
        item.id === id ? { ...item, soLuong: item.soLuong + 1 } : item,
      ),
    );
  };

  const giamSoLuong = (id) => {
    ganGioHang((mangCu) =>
      mangCu
        .map((item) =>
          item.id === id ? { ...item, soLuong: item.soLuong - 1 } : item,
        )
        .filter((item) => item.soLuong > 0),
    );
  };

  const tongTien = useMemo(() => {
    return gioHang.reduce((tong, item) => tong + item.price * item.soLuong, 0);
  }, [gioHang]);

  useMemo(() => {
    if (!thongBao) return;
    const boDem = setTimeout(() => {
      ganThongBao("");
    }, 3000);
    return () => clearTimeout(boDem);
  }, [thongBao]);

  return (
    <CartContext.Provider
      value={{
        gioHang,
        tongTien,
        thongBao,
        themVaoGio,
        tangSoLuong,
        giamSoLuong,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };

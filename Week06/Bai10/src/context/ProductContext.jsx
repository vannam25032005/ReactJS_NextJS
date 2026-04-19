import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [duLieu, ganDuLieu] = useState([]);
  const [dangTai, ganDangTai] = useState(false);
  const [loi, ganLoi] = useState(null);

  const layDanhSachSanPham = async () => {
    try {
      ganDangTai(true);
      ganLoi(null);

      const phanHoi = await fetch("https://dummyjson.com/products");

      if (!phanHoi.ok) {
        throw new Error("Khong the lay danh sach san pham");
      }

      const ketQua = await phanHoi.json();
      ganDuLieu(ketQua.products);
    } catch (loi) {
      ganLoi(loi.message);
    } finally {
      ganDangTai(false);
    }
  };

  useEffect(() => {
    layDanhSachSanPham();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        duLieu,
        dangTai,
        loi,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };

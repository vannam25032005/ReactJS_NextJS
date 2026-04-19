import { configureStore, createSlice } from "@reduxjs/toolkit";

const gioHangSlice = createSlice({
  name: "gioHang",
  initialState: {
    danhSach: [],
  },
  reducers: {
    themVaoGio: (state, action) => {
      const sanPhamMoi = action.payload;
      const sanPhamDaCo = state.danhSach.find(
        (sanPham) => sanPham.id === sanPhamMoi.id,
      );

      if (sanPhamDaCo) {
        sanPhamDaCo.soLuong += 1;
      } else {
        state.danhSach.push({
          ...sanPhamMoi,
          soLuong: 1,
        });
      }
    },
    tangSoLuong: (state, action) => {
      const sanPhamCanTang = state.danhSach.find(
        (sanPham) => sanPham.id === action.payload,
      );
      if (sanPhamCanTang) {
        sanPhamCanTang.soLuong += 1;
      }
    },
    giamSoLuong: (state, action) => {
      const sanPhamCanGiam = state.danhSach.find(
        (sanPham) => sanPham.id === action.payload,
      );

      if (sanPhamCanGiam) {
        if (sanPhamCanGiam.soLuong > 1) {
          sanPhamCanGiam.soLuong -= 1;
        } else {
          state.danhSach = state.danhSach.filter(
            (sanPham) => sanPham.id !== action.payload,
          );
        }
      }
    },
  },
});

export const { themVaoGio, tangSoLuong, giamSoLuong } = gioHangSlice.actions;

const cuaHang = configureStore({
  reducer: {
    gioHang: gioHangSlice.reducer,
  },
});

export default cuaHang;

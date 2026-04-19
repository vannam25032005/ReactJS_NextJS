import { configureStore, createSlice } from "@reduxjs/toolkit";

const congViecSlice = createSlice({
  name: "congViec",
  initialState: {
    danhSach: [],
  },
  reducers: {
    themCongViec: (state, action) => {
      const congViecMoi = {
        id: Date.now(),
        noiDung: action.payload,
      };
      state.danhSach.push(congViecMoi);
    },
    xoaCongViec: (state, action) => {
      state.danhSach = state.danhSach.filter(
        (congViec) => congViec.id !== action.payload,
      );
    },
    suaCongViec: (state, action) => {
      const { id, noiDungMoi } = action.payload;
      const congViecCanSua = state.danhSach.find(
        (congViec) => congViec.id === id,
      );
      if (congViecCanSua) {
        congViecCanSua.noiDung = noiDungMoi;
      }
    },
  },
});

export const { themCongViec, xoaCongViec, suaCongViec } = congViecSlice.actions;

const cuaHang = configureStore({
  reducer: {
    congViec: congViecSlice.reducer,
  },
});

export default cuaHang;

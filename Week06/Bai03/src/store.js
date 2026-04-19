import { configureStore, createSlice } from "@reduxjs/toolkit";

const nguoiDungSlice = createSlice({
  name: "nguoiDung",
  initialState: {
    thongTin: null,
  },
  reducers: {
    dangNhap: (state, action) => {
      state.thongTin = action.payload;
    },
    dangXuat: (state) => {
      state.thongTin = null;
    },
  },
});

export const { dangNhap, dangXuat } = nguoiDungSlice.actions;

const cuaHang = configureStore({
  reducer: {
    nguoiDung: nguoiDungSlice.reducer,
  },
});

export default cuaHang;

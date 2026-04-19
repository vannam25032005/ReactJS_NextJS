import { configureStore, createSlice } from "@reduxjs/toolkit";

const thongBaoSlice = createSlice({
  name: "thongBao",
  initialState: {
    noiDung: "",
    hienThi: false,
  },
  reducers: {
    hienThongBao: (state, action) => {
      state.noiDung = action.payload;
      state.hienThi = true;
    },
    anThongBao: (state) => {
      state.noiDung = "";
      state.hienThi = false;
    },
  },
});

export const { hienThongBao, anThongBao } = thongBaoSlice.actions;

const cuaHang = configureStore({
  reducer: {
    thongBao: thongBaoSlice.reducer,
  },
});

export default cuaHang;

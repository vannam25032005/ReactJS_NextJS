import { configureStore, createSlice } from "@reduxjs/toolkit";

const layGiaoDienTuBoNho = () => {
  const giaoDienDaLuu = localStorage.getItem("giaoDien");
  return giaoDienDaLuu === "dark" ? "dark" : "light";
};

const giaoDienSlice = createSlice({
  name: "giaoDien",
  initialState: {
    cheDo: layGiaoDienTuBoNho(),
  },
  reducers: {
    doiGiaoDien: (state) => {
      state.cheDo = state.cheDo === "light" ? "dark" : "light";
      localStorage.setItem("giaoDien", state.cheDo);
    },
  },
});

export const { doiGiaoDien } = giaoDienSlice.actions;

const cuaHang = configureStore({
  reducer: {
    giaoDien: giaoDienSlice.reducer,
  },
});

export default cuaHang;

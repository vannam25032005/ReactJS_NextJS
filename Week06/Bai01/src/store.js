import { configureStore, createSlice } from "@reduxjs/toolkit";

const boDemSlice = createSlice({
  name: "boDem",
  initialState: {
    giaTri: 0,
  },
  reducers: {
    tang: (state) => {
      state.giaTri += 1;
    },
    giam: (state) => {
      state.giaTri -= 1;
    },
  },
});

export const { tang, giam } = boDemSlice.actions;

const cuaHang = configureStore({
  reducer: {
    boDem: boDemSlice.reducer,
  },
});

export default cuaHang;

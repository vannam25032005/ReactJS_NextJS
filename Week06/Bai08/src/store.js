import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

export const timKiemSanPham = createAsyncThunk(
  "timKiem/timKiemSanPham",
  async (tuKhoa, thunkAPI) => {
    try {
      const phanHoi = await fetch(
        `https://dummyjson.com/products/search?q=${tuKhoa}`,
      );

      if (!phanHoi.ok) {
        throw new Error("Khong the lay du lieu");
      }

      const duLieu = await phanHoi.json();
      return duLieu.products;
    } catch (loi) {
      return thunkAPI.rejectWithValue(loi.message);
    }
  },
);

const timKiemSlice = createSlice({
  name: "timKiem",
  initialState: {
    tuKhoa: "",
    ketQua: [],
    loading: false,
    error: null,
  },
  reducers: {
    capNhatTuKhoa: (state, action) => {
      state.tuKhoa = action.payload;
    },
    xoaKetQua: (state) => {
      state.ketQua = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (boXuLy) => {
    boXuLy
      .addCase(timKiemSanPham.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(timKiemSanPham.fulfilled, (state, action) => {
        state.loading = false;
        state.ketQua = action.payload;
      })
      .addCase(timKiemSanPham.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { capNhatTuKhoa, xoaKetQua } = timKiemSlice.actions;

const cuaHang = configureStore({
  reducer: {
    timKiem: timKiemSlice.reducer,
  },
});

export default cuaHang;

import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

export const layDanhSachNguoiDung = createAsyncThunk(
  "nguoiDung/layDanhSachNguoiDung",
  async (_, thunkAPI) => {
    try {
      const phanHoi = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!phanHoi.ok) {
        throw new Error("Khong the lay du lieu");
      }

      const duLieu = await phanHoi.json();
      return duLieu;
    } catch (loi) {
      return thunkAPI.rejectWithValue(loi.message);
    }
  },
);

const nguoiDungSlice = createSlice({
  name: "nguoiDung",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (boXuLy) => {
    boXuLy
      .addCase(layDanhSachNguoiDung.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(layDanhSachNguoiDung.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(layDanhSachNguoiDung.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

const cuaHang = configureStore({
  reducer: {
    nguoiDung: nguoiDungSlice.reducer,
  },
});

export default cuaHang;

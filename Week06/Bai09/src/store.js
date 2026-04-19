import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const layTokenTuBoNho = () => {
  return localStorage.getItem("token") || null;
};

export const dangNhapApi = createAsyncThunk(
  "xacThuc/dangNhapApi",
  async (thongTinDangNhap, thunkAPI) => {
    try {
      const phanHoi = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(thongTinDangNhap),
      });

      if (!phanHoi.ok) {
        throw new Error("Dang nhap that bai");
      }

      const duLieu = await phanHoi.json();
      return duLieu;
    } catch (loi) {
      return thunkAPI.rejectWithValue(loi.message);
    }
  },
);

export const layThongTinNguoiDung = createAsyncThunk(
  "xacThuc/layThongTinNguoiDung",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.xacThuc.token;

      const phanHoi = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!phanHoi.ok) {
        throw new Error("Khong lay duoc thong tin nguoi dung");
      }

      const duLieu = await phanHoi.json();
      return duLieu;
    } catch (loi) {
      return thunkAPI.rejectWithValue(loi.message);
    }
  },
);

const xacThucSlice = createSlice({
  name: "xacThuc",
  initialState: {
    token: layTokenTuBoNho(),
    nguoiDung: null,
    loading: false,
    error: null,
  },
  reducers: {
    dangXuat: (state) => {
      state.token = null;
      state.nguoiDung = null;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (boXuLy) => {
    boXuLy
      .addCase(dangNhapApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(dangNhapApi.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.accessToken;
        localStorage.setItem("token", action.payload.accessToken);
      })
      .addCase(dangNhapApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(layThongTinNguoiDung.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(layThongTinNguoiDung.fulfilled, (state, action) => {
        state.loading = false;
        state.nguoiDung = action.payload;
      })
      .addCase(layThongTinNguoiDung.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { dangXuat } = xacThucSlice.actions;

const cuaHang = configureStore({
  reducer: {
    xacThuc: xacThucSlice.reducer,
  },
});

export default cuaHang;

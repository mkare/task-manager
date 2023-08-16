import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signUp, signIn, signOutUser } from "@utils/authManager";

export interface AuthState {
  user: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  status: "idle",
  error: null,
};

export const signUpAsync = createAsyncThunk(
  "auth/signUpAsync",
  async (credentials: { email: string; password: string }) => {
    const { email, password } = credentials;
    const userId = await signUp(email, password);
    if (userId) {
      return userId;
    } else {
      throw new Error("Kayıt işlemi başarısız.");
    }
  }
);

export const signInAsync = createAsyncThunk(
  "auth/signInAsync",
  async (credentials: { email: string; password: string }) => {
    const { email, password } = credentials;
    const userId = await signIn(email, password);
    if (userId) {
      return userId;
    } else {
      throw new Error("Giriş işlemi başarısız.");
    }
  }
);

export const signOutAsync = createAsyncThunk("auth/signOutAsync", async () => {
  await signOutUser();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUpAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(signUpAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Kayıt işlemi başarısız.";
      })
      .addCase(signInAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(signInAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Giriş işlemi başarısız.";
      })
      .addCase(signOutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOutAsync.fulfilled, (state) => {
        state.status = "succeeded";
        state.user = null;
      })
      .addCase(signOutAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Çıkış işlemi başarısız.";
      });
  },
});

export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export default authSlice.reducer;

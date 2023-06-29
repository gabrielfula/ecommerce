import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    name: null,
    isLogged: false,
  },
  reducers: {
    login: (state, action) => {
      state.name = action.payload;
    },
    logout: (state) => {
      state.name = null;
    },
  },
});

export const { login, logout } = slice.actions;

export const userSelect = (state) => state.user.name;

export default slice.reducer;

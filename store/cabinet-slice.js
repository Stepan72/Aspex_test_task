"use client";
import { createSlice } from "@reduxjs/toolkit";

const cabinetSlice = createSlice({
  name: "cabinet",
  initialState: {
    isLogged: false,
  },
  reducers: {
    loginFun(state) {
      state.isLogged = true;
    },
  },
});

export const cabinetActions = cabinetSlice.actions;
export default cabinetSlice.reducer;

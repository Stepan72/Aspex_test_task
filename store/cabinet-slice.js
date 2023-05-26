"use client";
import { createSlice } from "@reduxjs/toolkit";

const cabinetSlice = createSlice({
  name: "cabinet",
  initialState: {
    isLogged: false,
    date: {
      day: null,
      month: null,
      year: null,
    },
    time: null,
    person: null,
  },
  reducers: {
    loginFun(state) {
      state.isLogged = true;
    },
    dateFun(state, action) {
      state.date.day = action.payload.day;
      state.date.month = action.payload.month;
      state.date.year = action.payload.year;
    },
    timeFun(state, action) {
      state.time = action.payload;
    },
    personFun(state, action) {
      state.person = action.payload;
    },
  },
});

export const cabinetActions = cabinetSlice.actions;
export default cabinetSlice.reducer;

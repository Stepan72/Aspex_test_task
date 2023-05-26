"use client";

import { configureStore } from "@reduxjs/toolkit";
import cabinetReducer from "./cabinet-slice";

const store = configureStore({
  reducer: {
    cabinet: cabinetReducer,
  },
});

export default store;

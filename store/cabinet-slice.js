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
    availableTables: [
      { tableFor: "2", qty: 7 },
      { tableFor: "3", qty: 6 },
      { tableFor: "6", qty: 3 },
    ],
    bookedTables: [],
    starWarsData: [],
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
    tableFun(state, action) {
      let index = action.payload;
      let selectedTable = state.availableTables[index];
      if (selectedTable.qty === 0) {
        return;
      } else {
        let id = Math.random().toFixed(3);
        const updatedTable = { ...selectedTable, qty: selectedTable.qty - 1 };
        state.availableTables[index] = updatedTable;
        state.bookedTables.push({
          ...selectedTable,
          qty: 1,
          day: state.date.day,
          month: state.date.month,
          year: state.date.year,
          time: state.time,
          id: id,
        });
        state.date = {
          day: null,
          month: null,
          year: null,
        };
        state.time = null;
      }
    },
    deleteTableFun(state, action) {
      const deleteId = action.payload;
      const deleteTable = state.bookedTables.find((el) => {
        return el.id === deleteId;
      });
      const updatedBookedTable = state.bookedTables.filter((el) => {
        return el.id !== deleteId;
      });
      state.bookedTables = updatedBookedTable;
      const deleteTableIndex = state.availableTables.findIndex((el) => {
        return el.tableFor == deleteTable.tableFor;
      });
      let restoreTable = state.availableTables[deleteTableIndex];
      restoreTable = { ...restoreTable, qty: restoreTable.qty + 1 };
      state.availableTables[deleteTableIndex] = restoreTable;
    },
    starWarsFun(state, action) {
        state.starWarsData = action.payload;
    }
  },
});

export const cabinetActions = cabinetSlice.actions;
export default cabinetSlice.reducer;

/////// Draw
// const existingIndex = state.bookedTables.findIndex((el) => {
//     return el.tableFor === selectedTable.tableFor;
//   });
//   if (existingIndex !== -1) {
//     let updateExistingTable = state.bookedTables[existingIndex];
//     updateExistingTable = {
//       ...updateExistingTable,
//       qty: updateExistingTable.qty + 1,
//     };
//     state.bookedTables[existingIndex] = updateExistingTable;
//   } else {
//     state.bookedTables.push({ ...selectedTable, qty: 1 });
//   }

//// draw #2
//   const deleteIndex = state.availableTables.findIndex(el => {return
//     el.tableFor === deleteTable.tableFor
//   })
//   let restoreTable = state.availableTables[deleteIndex];
//   restoreTable = {...restoreTable, qty: restoreTable.qty + 1};
//   state.availableTables[deleteIndex] = restoreTable;

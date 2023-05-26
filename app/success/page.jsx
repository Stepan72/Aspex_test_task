"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Success() {
  const bookedTables = useSelector((state) => state.cabinet.bookedTables);
  const availableTables = useSelector((state) => state.cabinet.availableTables);
  const enteredDataPrevious = useSelector((state) => state.cabinet);
  console.log(bookedTables);
  console.log(availableTables);
  console.log(enteredDataPrevious);

  return <div>Success</div>;
}

export default Success;

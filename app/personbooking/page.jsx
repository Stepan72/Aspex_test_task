"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { cabinetActions } from "@/store/cabinet-slice";
import Table from "@/components/Table";

function PersonBooking() {
  const [activePin, setActivePin] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const availableTables = useSelector((state) => state.cabinet.availableTables);
  const allTables = useSelector((state) => state.cabinet.allTables);

  function personPickHandler() {
    // console.log(availableTables[activePin]);

    if (availableTables[activePin].qty !== 0) {
      dispatch(cabinetActions.tableFun(activePin));
      console.log("success");
      router.replace("/success");
    } else {
      setError("No available tables left!");
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  }

  function pinHandler(index) {
    // console.log(index);
    setActivePin(index);
  }

  return (
    <div className="flex flex-col justify-center items-center text-center py-[100px]">
      PersonBooking
      <div className="flex flex-row gap-[50px]">
        {availableTables.map((el, index) => {
          return (
            <button
              onClick={() => {
                pinHandler(index);
              }}
              key={index}
              className="flex width-[250px] height-[250px] mt-[10px]"
            >
              <Table
                tableFor={el.tableFor}
                AllQty={allTables[index].qty}
                qty={el.qty}
              />
            </button>
          );
        })}
      </div>
      <div className="mt-[10px]">
        <Link href="/timebooking">Previous</Link>
        <button type="button" onClick={personPickHandler}>
          Save
        </button>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default PersonBooking;

///////////////
// useEffect(() => {
//   async function getData() {
//     console.log("person render");
//     const response = await fetch("http://localhost:3000/api/prompt");
//     const data = await response.json();
//     dispatch(cabinetActions.loadDataTables(data));
//     dispatch(cabinetActions.startIsOver());
//   }
//   if (!start) {
//     getData();
//   }
// }, []);

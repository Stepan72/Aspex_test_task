"use client";
import React, { useState } from "react";
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

  //   const enteredDataPrevious = useSelector((state) => state.cabinet);
  //   console.log(availableTables);

  function personPickHandler() {
    // console.log(enteredDataPrevious);
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
              <Table tableFor={el.tableFor} qty={el.qty} />
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

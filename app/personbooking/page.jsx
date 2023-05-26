"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { cabinetActions } from "@/store/cabinet-slice";

function PersonBooking() {
  const router = useRouter();
  const enteredDataPrevious = useSelector((state) => state.cabinet);

  function personPickHandler() {
    // console.log(value);
    console.log(enteredDataPrevious);
    console.log("success");
    // router.push("/success");
  }

  return (
    <div className="flex flex-col justify-center items-center text-center py-[100px]">
      PersonBooking
      <div></div>
      <div>
        <Link href="/timebooking">Previous</Link>
        <button type="button" onClick={personPickHandler}>
          Save
        </button>
      </div>
    </div>
  );
}

export default PersonBooking;

{
  /* <DateTimePicker onChange={onChange} value={value} /> */
}

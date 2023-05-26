"use client";

import React from "react";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { cabinetActions } from "@/store/cabinet-slice";

function DayBooking() {
  const [value, onChange] = useState(new Date());
  const router = useRouter();
  const dispatch = useDispatch();
  //   const date = useSelector((state) => state.cabinet.date);

  function datePickHandler() {
    // console.log(value);
    // console.log(value.getDate());
    // console.log(value.getMonth());

    dispatch(
      cabinetActions.dateFun({
        day: value.getDate(),
        month: value.getMonth(),
        year: value.getFullYear(),
      })
    );
    router.replace("/timebooking");
  }

  return (
    <div className="flex flex-col justify-center items-center text-center py-[100px]">
      DayBooking
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
      <div>
        <Link href="/">Cancel</Link>
        <button type="button" onClick={datePickHandler}>
          Далее
        </button>
      </div>
    </div>
  );
}

export default DayBooking;

{
  /* <DateTimePicker onChange={onChange} value={value} /> */
}

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import TimePicker from "react-time-picker";
import { useSelector, useDispatch } from "react-redux";
import { cabinetActions } from "@/store/cabinet-slice";

function TimeBooking() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [value, onChange] = useState("13:00");

  function timePickHandler() {
    dispatch(cabinetActions.timeFun(value));
    router.replace("/personbooking");
    // console.log(value);
  }

  return (
    <div className="flex flex-col justify-center items-center text-center py-[100px]">
      TimeBooking
      <div>
        <TimePicker
          onChange={onChange}
          value={value}
          minTime="13:00:00"
          maxTime="22:00:00"
        />
      </div>
      <div>
        <Link href="/daybooking">Previous</Link>
        <button type="button" onClick={timePickHandler}>
          Далее
        </button>
      </div>
    </div>
  );
}

export default TimeBooking;

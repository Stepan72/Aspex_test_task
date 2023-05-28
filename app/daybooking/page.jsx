"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { cabinetActions } from "@/store/cabinet-slice";

function DayBooking() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [value, onChange] = useState(new Date());

  //   const date = useSelector((state) => state.cabinet.date);

  function datePickHandler() {
    // console.log(value);
    // console.log(value.getDate());
    // console.log(value.getMonth());

    dispatch(
      cabinetActions.dateSaveRedHandler({
        day: value.getDate(),
        month: value.getMonth(),
        year: value.getFullYear(),
      })
    );
    router.replace("/timebooking");
  }

  return (
    <div className="flex flex-col justify-center items-center text-center py-[100px]">
      <h2 className="text-[30px] mb-[30px]">
        Выберете желаемый день бронирования
      </h2>
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="mt-[30px] flex gap-[30px] ">
        <Link href="/" className="cancel__button">
          Отмена
        </Link>
        <button
          type="button"
          className="next__button bg-amber-300"
          onClick={datePickHandler}
        >
          Далее
        </button>
      </div>
    </div>
  );
}

export default DayBooking;

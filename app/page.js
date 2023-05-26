"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

function Home() {
  const isLogged = useSelector((state) => state.cabinet.isLogged);
  const router = useRouter();
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    if (!isLogged) {
      router.push("/auth");
    }
  }, []);

  return (
    <div>
      Home
      <DateTimePicker onChange={onChange} value={value} />
    </div>
  );
}

export default Home;

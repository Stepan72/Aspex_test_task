"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { runFireworks } from "../../utils/confetti";
import Link from "next/link";

function Success() {
  const bookedTables = useSelector((state) => state.cabinet.bookedTables);
  const availableTables = useSelector((state) => state.cabinet.availableTables);
  const enteredDataPrevious = useSelector((state) => state.cabinet);

  // console.log(bookedTables);
  // console.log(availableTables);
  // console.log(enteredDataPrevious);

  useEffect(() => {
    runFireworks();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-center py-[100px]">
      <div className="flex w-[800px] h-[500px] justify-center items-center success_table_mobile">
        <h2 className="text-[30px] z-10 bg-zinc-100/70 rounded-[30px] px-[10px] py-[10px] text-green-800">
          Поздравляем 🎉🎉🎉 <br /> Стол успешно забронирован!
        </h2>
        <img
          src="assets/success_table.jpg"
          alt="success_table"
          className="absolute w-[800px] h-[500px] object-cover rounded-[50px] absolute "
        />
      </div>
      <div className="mt-[50px] flex gap-[30px] ">
        <Link href="/" className="cancel__button">
          Домой
        </Link>
        <Link href="/profile" className="next__button bg-amber-300">
          Брони
        </Link>
      </div>
    </div>
  );
}

export default Success;

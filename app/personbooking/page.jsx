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
      dispatch(cabinetActions.tableBookRedHandler(activePin));
      console.log("success");
      router.replace("/success");
    } else {
      setError("Извините, но данные столы заняты! Выберите другой стол!");
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
      <h2 className="text-[30px] mb-[30px]">
        Выберете стол на нужное количество персон
      </h2>
      <div className="flex flex-row gap-[30px]">
        {availableTables.map((el, index) => {
          return (
            <button
              onClick={() => {
                pinHandler(index);
              }}
              key={index}
            >
              <Table
                tableFor={el.tableFor}
                AllQty={allTables[index].qty}
                qty={el.qty}
                index={index}
                activePin={activePin}
              />
            </button>
          );
        })}
      </div>
      <div className="mt-[50px] flex gap-[30px] ">
        <Link href="/timebooking" className="cancel__button">
          Назад
        </Link>
        <button
          type="button"
          onClick={personPickHandler}
          className="next__button bg-amber-300"
        >
          Сохранить
        </button>
      </div>
      {error && <p className="mt-[20px]">{error}</p>}
    </div>
  );
}

export default PersonBooking;

"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cabinetActions } from "@/store/cabinet-slice";
import { useRouter } from "next/navigation";

function Profile() {
  const [error, setError] = useState(null);
  const bookedTables = useSelector((state) => state.cabinet.bookedTables);
  const dispatch = useDispatch();
  const router = useRouter();
  const currentDateTime = new Date();

  function deleteHandler(el) {
    let newTime = el.time.split(":");
    const tableDateTime = new Date(
      el.year,
      el.month,
      el.day,
      newTime[0],
      newTime[1]
    );

    console.log(tableDateTime - currentDateTime);
    if (
      tableDateTime - currentDateTime < 3600000 &&
      tableDateTime - currentDateTime > 0
    ) {
      setError(
        "Извините, но осталось менее часа до забронированного времени. Вы не можете отменить бронь!"
      );
    } else {
      // console.log("Вы удалили бронь!");
      dispatch(cabinetActions.deleteTableFun(el.id));
    }

    setTimeout(() => {
      setError(null);
    }, 2000);
  }

  //   console.log(bookedTables);

  return (
    <div>
      Profile
      <div className="flex flex-col">
        <div className="flex flex-row flex-wrap width-[600px]my-[100px] mx-[100px]">
          {bookedTables.map((el, index) => {
            return (
              <div
                key={index}
                className="width-[200px] height[20px] mx-[30px] my-[30px] text-center"
              >
                <h3>Бронь стола №{index + 1}</h3>
                <p>Для {el.tableFor} человек</p>
                <p>
                  Забронирован на {el.time} <br />
                  {el.day}.
                  {el.month.toString().length < 2 ? `0${el.month}` : el.month}.
                  {el.year}
                </p>
                <button
                  onClick={() => {
                    deleteHandler(el);
                  }}
                >
                  Удалить бронь
                </button>
              </div>
            );
          })}
        </div>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default Profile;

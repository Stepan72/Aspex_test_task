"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cabinetActions } from "@/store/cabinet-slice";
import { ServerInsertedHTMLContext } from "next/navigation";

function Profile() {
  const bookedTables = useSelector((state) => state.cabinet.bookedTables);
  const dispatch = useDispatch();

  function deleteHandler(id) {
    console.log(id);
    dispatch(cabinetActions.deleteTableFun(id));
  }

  console.log(bookedTables);

  return (
    <div>
      Profile
      <div className="flex flex-row">
        {bookedTables.map((el, index) => {
          return (
            <div key={index}>
              Забронированный стол №{index + 1}
              <p>Для {el.tableFor} человек</p>
              Забронирован на {el.time}
              {el.day} {el.month} {el.year}
              id заказа {el.id}
              <button
                onClick={() => {
                  deleteHandler(el.id);
                }}
              >
                Удалить бронь
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;

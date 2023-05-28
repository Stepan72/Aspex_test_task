"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cabinetActions } from "@/store/cabinet-slice";
import { useRouter } from "next/navigation";
import Backdrop from "@/components/Backdrop";
import Modal from "@/components/Modal";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

function Profile() {
  const [deleteState, setDeleteState] = useState(null);
  const [elToDelete, setElToDelete] = useState(null);

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
      setTimeout(() => {
        setError(null);
      }, 3000);
    } else {
      // console.log("Вы удалили бронь!");
      setDeleteState(true);
      setElToDelete(el);
    }
  }

  function cancelDeleteState() {
    setDeleteState(false);
    setElToDelete(null);
  }

  function deleteAcceptHandler() {
    dispatch(cabinetActions.deleteTableBookRedHandler(elToDelete.id));
    setElToDelete(null);
    setDeleteState(false);
  }

  return (
    <div>
      {error && (
        <div>
          <Backdrop />
          <Modal message={error} />
        </div>
      )}
      {deleteState && (
        <div>
          <Backdrop cancel={cancelDeleteState} />
          <Modal
            message="Вы уверены что хотите удалить бронь?"
            cancel={cancelDeleteState}
            delete={deleteAcceptHandler}
          />
        </div>
      )}
      <div className="w-[100%] h-[100%]">
        <div className="flex flex-row flex-wrap my-[20px] mx-[20px] justify-center ">
          {bookedTables.map((el, index) => {
            return (
              <motion.div
                key={index}
                className="w-[300px] h-[300px] mx-[20px] my-[20px] text-center flex flex-col justify-center"
                variants={fadeIn("up", "tween", 0.1, 0.4)}
                initial="hidden"
                whileInView="show"
              >
                <img
                  src={`assets/profile-table.jpg`}
                  className="absolute z-[-1] w-[300px] h-[300px] object-cover rounded-[30px]"
                  alt="booked_table"
                />
                <div className="flex flex-col justify-center mx-[40px] bg-zinc-100/70 rounded-[30px]">
                  <h3>Бронь стола №{index + 1}</h3>
                  <p>Для {el.tableFor} человек</p>
                  <p>
                    Забронирован на {el.time} <br />
                    {el.day}.
                    {el.month.toString().length < 2 ? `0${el.month}` : el.month}
                    .{el.year}
                  </p>
                  <button
                    className="bg-amber-300 rounded-[30px] mx-[30px] my-[10px] text-rose-500 text-extrabold "
                    onClick={() => {
                      deleteHandler(el);
                    }}
                  >
                    Удалить бронь
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;

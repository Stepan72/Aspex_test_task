"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { cabinetActions } from "@/store/cabinet-slice";

export default async function Home() {
  // async function getData() {
  //   const res = await fetch("api/prompt");
  //   if (!res.ok) {
  //     throw new Error("Failed to fetch data");
  //   }
  //   return res.json();
  // }

  // /// Fetch
  // const data = await getData();
  // console.log(data);

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center py-[100px]">
        <h2 className="font-serif text-[30px] text-bold">
          Добро пожаловать в сервис бронирования столов ресторана{" "}
          <span className="text-rose-500 uppercase">"Atlant"</span>
        </h2>
        <Link
          href="/daybooking"
          className="border-2 border-rose-500 px-[10px] py-[10px] rounded-lg bg-rose-500 text-white text-[20px] mt-[50px]"
        >
          Забронировать
        </Link>
        <button onClick={() => {}}>Data</button>
      </div>
    </div>
  );
}

// async function getData() {
//   const res = await fetch("https://swapi.dev/api/people/1");
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// export default async function Page() {
//   const data = await getData();
//   console.log(data);

//   return <main></main>;
// }

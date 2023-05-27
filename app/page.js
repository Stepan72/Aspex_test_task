"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";

export default async function Home() {
  const [loadedData, setLoadedData] = useState(null);
  console.log("render");

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
        <button>Data</button>
      </div>
    </div>
  );
}

/// рабочая на стар варс
// async function getData() {
//   const res = await fetch("https://swapi.dev/api/people/1");
//   // const res = await fetch("/api/prompt");

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

//   return (
//     <main>
//       Check Star <br />
//       {/* {data[0]} */}
//       {data.name}
//     </main>
//   );
// }

// async function getData() {
//   const res = await fetch("/api/prompt");
//   // const res = await fetch("https://swapi.dev/api/people/1");

//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// export default async function Home() {
//   const data = await getData();
//   console.log(data);

//   return <main>{data[0]}</main>;
// }

//////////////
//////////////
// async function getData() {
//   const res = await fetch("http://localhost:3000/api/prompt");
//   // const res = await fetch("https://swapi.dev/api/people/1");

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

// export default async function Home() {
//   const [loadedData, setLoadedData] = useState(null);
//   console.log("render");
/// Fetch
// const data = await getData();
// console.log(data);
///

/// SSR
// const response = await fetch("http://localhost:3000/api/prompt");
// // console.log(response);
// const data = await response.json();
// console.log(data);
// console.log("check");
///
// const dispatch = useDispatch();
// const starWarsData = useSelector((state) => {
//   state.cabinet.starWarsData;
// });

// useEffect(() => {
//   // const fetchData = async () => {
//   //   const response = await fetch("http://localhost:3000/api/prompt");
//   //   const data = await response.json();
//   //   console.log(data);
//   //   // setLoadedData(data);
//   // };

//   // fetchData();
//   console.log("hello");
// }, []);

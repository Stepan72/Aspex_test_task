"use client";
import React from "react";
import { FaBars } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import Link from "next/link";

function Navbar() {
  const isLogged = useSelector((state) => state.cabinet.isLogged);

  return (
    <nav className="flex flex-row justify-between width-[100%] min-height-[500px] bg-rose-500	 px-[10px] py-[10px]">
      <button className="flex gap-[10px] items-center text-white">
        {isLogged && (
          <Link href="/profile" className="flex gap-[10px] items-center">
            <FaBars />
            <p>Личный кабинет</p>
          </Link>
        )}
      </button>
      <div className="flex gap-[10px] items-center text-white">
        {isLogged && <p>user_name</p>}
        {!isLogged && <Link href="/auth">Log In</Link>}
        <FaUser />
        {isLogged && <Link href="/">Back Home</Link>}
      </div>
    </nav>
  );
}

export default Navbar;

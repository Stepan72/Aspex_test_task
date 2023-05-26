"use client";
import React from "react";
import { FaBars } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import Link from "next/link";

function Navbar() {
  const isLogged = useSelector((state) => state.cabinet.isLogged);

  return (
    <nav className="flex flex-row justify-between width-[100%] min-height-[500px] bg-[rgba(100,50,20,1)] px-[10px] py-[10px]">
      <button className="flex gap-[10px] items-center text-white">
        <FaBars />
        <p>Личный кабинет</p>
      </button>
      <div className="flex gap-[10px] items-center text-white">
        {isLogged && <p>user_name</p>}
        {!isLogged && <Link href="/auth">Log In</Link>}
        <FaUser />
      </div>
    </nav>
  );
}

export default Navbar;

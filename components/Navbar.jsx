"use client";
import React from "react";
import { FaBars } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";
import Link from "next/link";

function Navbar() {
  const isLogged = useSelector((state) => state.cabinet.isLogged);

  return (
    <nav className="flex flex-row justify-between width-[100%] max-height-[50px] bg-amber-400	 px-[20px] py-[20px] nav__bar">
      <button className="flex items-center justify-center text-white ">
        {isLogged && (
          <Link href="/profile" className="flex items-center justify-center">
            <FaBars size={20} />
            <p className="text-[20px] pl-[10px]">Личный кабинет</p>
          </Link>
        )}
      </button>
      {!isLogged && (
        <div className="flex gap-[10px] items-center text-white">
          <FaUser size={20} />

          <Link href="/auth" className="text-[20px]">
            Log In
          </Link>
        </div>
      )}
      {isLogged && (
        <button className="flex text-white">
          <Link className="text-[20px]" href="/">
            <FaHome size={30} className="pr-[10px]" />
          </Link>
        </button>
      )}
    </nav>
  );
}

export default Navbar;

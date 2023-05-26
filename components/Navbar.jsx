import React from "react";
import { FaBars } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex flex-row justify-between width-[100%] min-height-[500px] bg-[rgba(100,50,20,1)] px-[10px] py-[10px]">
      <button className="flex gap-[10px] items-center text-white">
        <FaBars />
        <p>Личный кабинет</p>
      </button>
      <div className="flex gap-[10px] items-center text-white">
        <p>user_name</p>
        <FaUser />
      </div>
    </nav>
  );
}

export default Navbar;

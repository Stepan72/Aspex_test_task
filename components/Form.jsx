import React from "react";
import Link from "next/link";

function Form({ linkText, linkPath, buttonText, buttonAction }) {
  return (
    <form className="px-[50px] py-[100px] flex flex-col justify-center w-[500px]">
      <div className="flex flex-col ">
        <label htmlFor="name">Login</label>
        <input
          type="text"
          className="text-center"
          placeholder="Введите логин"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="text-center"
          placeholder="Введите пароль"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="telephone">Mobile</label>
        <input
          type="text"
          className="text-center"
          placeholder="Введите телефон в формате +7-XXX-XXX-XXX-X"
        />
      </div>
      <div className="flex text-[24px]">
        <Link href={`/${linkPath}`} className="flex-1 ">
          {linkText}
        </Link>
        <button type="button" className=" flex-1" onClick={buttonAction}>
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default Form;

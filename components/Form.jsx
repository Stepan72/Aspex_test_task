import React from "react";
import Link from "next/link";

function Form({ linkText, linkPath, buttonText, buttonAction }) {
  return (
    <form className="px-[50px] py-[100px] flex flex-col justify-center w-[400px]">
      <div className="flex flex-col ">
        <label htmlFor="name" className="text-[24px] my-[10px]">
          Login
        </label>
        <input
          type="text"
          className="text-center border-solid border-2 border-zinc-200 rounded-[10px]"
          placeholder="Введите логин"
          id="name"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-[24px] my-[10px]">
          Password
        </label>
        <input
          type="password"
          className="text-center border-solid border-2 border-zinc-200 rounded-[10px]"
          placeholder="Введите пароль"
          id="password"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="telephone" className="text-[24px] my-[10px]">
          Mobile
        </label>
        <input
          type="text"
          className="text-center border-solid border-2 border-zinc-200 rounded-[10px]"
          placeholder="Введите телефон в формате +7"
          id="telephone"
        />
      </div>
      <div className="flex text-[24px] mt-[30px] gap-[30px]">
        <Link href={`/${linkPath}`} className="flex-1 cancel__button">
          {linkText}
        </Link>
        <button
          type="button"
          className="flex-1 next__button bg-amber-300"
          onClick={buttonAction}
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default Form;

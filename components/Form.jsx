import React, { useRef, useState } from "react";
import Link from "next/link";

function Form({ linkText, linkPath, buttonText, buttonAction }) {
  const [error, setError] = useState(null);
  const nameRef = useRef();
  const passwordRef = useRef();
  const telephoneRef = useRef();

  function submitHandler() {
    const inputName = nameRef.current.value;
    const inputPassword = passwordRef.current.value;
    const inputTelephone = telephoneRef.current.value;

    if (
      inputName.length > 0 &&
      inputPassword.length >= 6 &&
      inputTelephone.includes("+7")
    ) {
      buttonAction({ inputName, inputPassword, inputTelephone });
    } else {
      setError("Введите корректные данные!");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }

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
          ref={nameRef}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-[24px] my-[10px]">
          Password
        </label>
        <input
          type="password"
          className="text-center border-solid border-2 border-zinc-200 rounded-[10px]"
          placeholder="Введите пароль не менее 6 знаков"
          id="password"
          ref={passwordRef}
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
          ref={telephoneRef}
        />
      </div>
      <div className="flex text-[24px] mt-[30px] gap-[30px]">
        <Link href={`/${linkPath}`} className="flex-1 cancel__button">
          {linkText}
        </Link>
        <button
          type="button"
          className="flex-1 next__button bg-amber-300"
          // onClick={buttonAction}
          onClick={submitHandler}
        >
          {buttonText}
        </button>
      </div>
      {error && <p className="mt-[10px]">{error}</p>}
    </form>
  );
}

export default Form;

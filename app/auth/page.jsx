"use client";
import React from "react";
import Form from "@/components/Form";
import { useSelector, useDispatch } from "react-redux";
import { cabinetActions } from "@/store/cabinet-slice";
import { useRouter } from "next/navigation";
useRouter;

function Auth() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.cabinet.isLogged);

  function loginHandler() {
    /// сверка данных введенного юзера и базы
    /// если все ок - переход на главную, нет - ошибка юзера и переотправка на повторный логин

    /// когда ок - переход на главную
    dispatch(cabinetActions.loginFun());
    console.log(isLogged);
    router.push("/");
  }

  console.log(isLogged);
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <Form
        linkText="Sign Up"
        buttonText="Log"
        buttonAction={loginHandler}
        linkPath="register"
      />
    </div>
  );
}

export default Auth;

"use client";
import React, { useState } from "react";
import Form from "@/components/Form";
import { useSelector, useDispatch } from "react-redux";
import { cabinetActions } from "@/store/cabinet-slice";
import { useRouter } from "next/navigation";
useRouter;
import toast from "react-hot-toast";

function Auth() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.cabinet.isLogged);

  async function loginHandler(data) {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(data),
      });
      // const response = await fetch("http://localhost:3000/api/login", {
      //   method: "POST",
      //   body: JSON.stringify(data),
      // });
      if (!response.ok) {
        toast.error("Неверный логин или пароль!");
      }
      if (response.ok) {
        // console.log(response);
        const resData = await response.json();
        // console.log(resData);
        toast.success("Успешный вход!");
        dispatch(cabinetActions.loginRedHandler());
        // console.log(isLogged);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

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

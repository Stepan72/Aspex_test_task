"use client";
import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { cabinetActions } from "@/store/cabinet-slice";
import { useRouter } from "next/navigation";
useRouter;

function Auth() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.cabinet.isLogged);

  function loginHandler() {
    dispatch(cabinetActions.loginFun());
    console.log(isLogged);
    router.push("/");
  }

  console.log(isLogged);
  return (
    <div>
      Auth
      <form>
        <div>
          <label htmlFor="name"></label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input type="password" />
        </div>
        <div>
          <label htmlFor="telephone"></label>
          <input type="text" />
        </div>
        <button type="button" onClick={loginHandler}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Auth;

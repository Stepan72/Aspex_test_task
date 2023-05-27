"use client";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";

function LoginWrapper({ children }) {
  console.log("auth render");
  const isLogged = useSelector((state) => state.cabinet.isLogged);
  const router = useRouter();

  /// входная проверка авторизации
  // / здесь надо и local и редакс проверить
  useEffect(() => {
    if (!isLogged) {
      router.push("/auth");
    }
  }, []);

  return <div>{children}</div>;
}

export default LoginWrapper;

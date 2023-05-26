"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";

import Link from "next/link";

function Home() {
  const isLogged = useSelector((state) => state.cabinet.isLogged);
  const router = useRouter();

  /// входная проверка авторизации
  /// здесь надо и local и редакс проверить
  useEffect(() => {
    if (!isLogged) {
      router.push("/auth");
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center py-[100px]">
        <h2>Добро пожаловать в сервис бронирования столиков</h2>
        <Link href="/daybooking">Забронировать</Link>
      </div>
    </div>
  );
}

export default Home;

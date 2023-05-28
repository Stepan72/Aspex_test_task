"use client";
import React from "react";
import Form from "@/components/Form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function Register() {
  const router = useRouter();

  async function registerHandler(data) {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(data),
      });
      // const response = await fetch("http://localhost:3000/api/register", {
      //   method: "POST",
      //   body: JSON.stringify(data),
      // });
      if (!response.ok) {
        toast.error("Ошибка регистрации!");
      }
      if (response.ok) {
        // console.log(response);
        const resData = await response.json();
        // console.log(resData);
        toast.success("Регистрация успешна!");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <Form
        linkText="Log In"
        buttonText="Register"
        buttonAction={registerHandler}
        linkPath="auth"
      />
    </div>
  );
}

export default Register;

"use client";
import React from "react";
import Form from "@/components/Form";

function Register() {
  function registerHandler(data) {
    console.log("register");
    console.log(data);
    /// происходит сохранение данных юзера
    /// дальше либо авторизация, либо на страницу, что все успешно (не успешно) и авторизуйтесь
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

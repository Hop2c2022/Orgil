import React from "react";
import "./one.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [mail, setMail] = useState("");
  const navigate = useNavigate();
  const InputListener = (event) => {
    setPassword(event.target.value);
  };
  const InputListener1 = (event) => {
    setPassword1(event.target.value);
  };
  const MailListener = (event) => {
    setMail(event.target.value);
  };
  console.log(mail);
  const Submit = async () => {
    if (password === password1) {
      await axios({
        method: "post",
        url: "http://localhost:8000/user",
        data: {
          email: mail,
          password: password,
        },
      });
      navigate("/login");
    } else {
      console.log("hud2");
    }
    return;
  };
  return (
    <div className="loginBig">
      <div className="loginHeader">
        <div className="loginHerhen">Хэрхэн ажилладаг вэ?</div>
      </div>
      <div className="loginLogo">
        <img className="loginlogo" src="img/boginoLogo.svg" />
      </div>
      <div className="loginBody">
        <div className="nevtreh">Бүртгүүлэх</div>
        <div className="loginBodyText1">
          <div className="loginTextLog">Цахим хаяг</div>
          <input
            className="loginBodyInp"
            onChange={MailListener}
            placeholder="name@mail.domain"
          />
        </div>
        <div className="loginBodyText1">
          <div className="loginTextLog">Нууц үг</div>
          <input
            className="loginBodyInp"
            onChange={InputListener}
            placeholder="************"
          />
        </div>
        <div className="loginBodyText1">
          <div className="loginTextLog">Нууц үгээ давтна уу?</div>
          <input
            className="loginBodyInp"
            onChange={InputListener1}
            placeholder="************"
          />
        </div>
        <div className="loginBodyText3">
          <button className="loginBtn" onClick={Submit}>
            Бүртгүүлэх
          </button>
        </div>
      </div>
      <div className="loginFooter">
        <img src="img/credit.svg" />
      </div>
    </div>
  );
};

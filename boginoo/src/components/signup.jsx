import React from "react";
import "./one.css";
export const Signup = () => {
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
          <input className="loginBodyInp" placeholder="name@mail.domain" />
        </div>
        <div className="loginBodyText1">
          <div className="loginTextLog">Нууц үг</div>
          <input className="loginBodyInp" placeholder="************" />
        </div>
        <div className="loginBodyText1">
          <div className="loginTextLog">Нууц үгээ давтна уу?</div>
          <input className="loginBodyInp" placeholder="************" />
        </div>
        <div className="loginBodyText3">
          <button className="loginBtn">Бүртгүүлэх</button>
        </div>
      </div>
      <div className="loginFooter">
        <img src="img/credit.svg" />
      </div>
    </div>
  );
};

import React, { useState } from "react";
import "./one.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext, useAuthContext } from "../common/AuthProvider";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { isAuthenticated, userId } = useAuthContext();

  const Nevtreh = async () => {
    const result = await axios({
      method: "post",
      headers: { "Content-Type": "application/json" },
      url: "http://localhost:8000/login",
      data: {
        email: email,
        password: pass,
      },
    });
    if (result?.data?.token) {
      localStorage.setItem("token", result.data.token);
      const userData = JSON.stringify(result.data.userData);
      localStorage.setItem("userData", userData);
    }
    if (isAuthenticated) {
      window.location = "/loggedin";
    }
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
        <div className="nevtreh">Нэвтрэх</div>
        <div className="loginBodyText1">
          <div className="loginTextLog">Цахим хаяг</div>
          <input
            className="loginBodyInp"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="name@mail.domain"
          />
        </div>
        <div className="loginBodyText2">
          <div className="loginText">
            <div className="loginTextLog">Нууц үг</div>
            <input
              className="loginBodyInp"
              onChange={(e) => {
                setPass(e.target.value);
              }}
              placeholder="************"
            />
          </div>
          <div className="loginNuutsUg">
            <div className="nmgSana1">
              <input
                className="nmgSana2"
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1" className="nmgSana3">
                Намайг сана
              </label>
            </div>
            <Link to={"/forgotpass"}>
              <div className="nmgSana4">Нууц үгээ мартсан</div>
            </Link>
          </div>
        </div>
        <div className="loginBodyText3">
          <button className="loginBtn" onClick={Nevtreh}>
            Нэвтрэх
          </button>
          <Link to={"/signup"}>
            <div className="loginText3Text">
              Шинэ хэрэглэгч бол энд дарна уу?
            </div>
          </Link>
        </div>
      </div>
      <div className="loginFooter">
        <img src="img/credit.svg" />
      </div>
    </div>
  );
};

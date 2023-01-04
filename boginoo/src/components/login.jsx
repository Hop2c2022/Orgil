import React from "react";
import "./one.css";
export const Login = () => {
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
          <input className="loginBodyInp" placeholder="name@mail.domain" />
        </div>
        <div className="loginBodyText2">
          <div className="loginText">
            <div className="loginTextLog">Нууц үг</div>
            <input className="loginBodyInp" placeholder="************" />
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
            <div className="nmgSana4">Нууц үгээ мартсан</div>
          </div>
        </div>
        <div className="loginBodyText3">
          <button className="loginBtn">Нэвтрэх</button>
          <div className="loginText3Text">Шинэ хэрэглэгч бол энд дарна уу?</div>
        </div>
      </div>
      <div className="loginFooter">
        <img src="img/credit.svg" />
      </div>
    </div>
  );
};

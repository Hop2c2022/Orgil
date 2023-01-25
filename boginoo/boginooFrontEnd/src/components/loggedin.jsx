import React from "react";
import "./loggedin.css";
export const Loggedin = () => {
  return (
    <div className="homeBig">
      <div className="loginHeader">
        <div className="loginHerhen">Хэрхэн ажилладаг вэ?</div>
        <div className="LogginName">{}</div>
      </div>
      <div className="homeBody">
        <div className="homeLogo">
          <img className="boginoLogo" src="img/boginoLogo.svg" />
        </div>
        <div className="homeBodytexts">
          <input
            className="homeBodyInp"
            placeholder="https://www.web-huudas.mn"
          />
          <button className="homeHeaderButton1">Богиносгох</button>
        </div>
      </div>
      <div>
        <img src="img/credit.svg" />
      </div>
    </div>
  );
};

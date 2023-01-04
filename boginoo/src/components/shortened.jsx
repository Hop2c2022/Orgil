import React from "react";
import "./shortened.css";
import { Header } from "./header";
export const Shortened = () => {
  return (
    <div className="homeBig">
      <Header />
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
        <div id="Holboos">
          <div id="ugugdsun">Өгөгдсөн холбоос:</div>
          <div id="zam">https://www.web-huudas.mn</div>
        </div>
        <div id="Holboos">
          <div id="ugugdsun">Богино холбоос:</div>
          <div id="shortenedbody">
            <div id="shortenedbodytext1">shortly.io/wbmn12</div>
            <div id="shortenedbodytext2">Хуулж авах</div>
          </div>
        </div>
      </div>
      <div>
        <img src="img/credit.svg" />
      </div>
    </div>
  );
};

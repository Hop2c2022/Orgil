import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
import "./history.css";
export const History = () => {
  const [Url, setUrl] = useState("");
  const Sonsogch = (event) => {
    const result = event.target.Value;
    return result;
  };
  return (
    <div className="homeBig">
      <div className="loginHeader">
        <div className="loginHerhen">Хэрхэн ажилладаг вэ?</div>
        <div className="LogginName">Dulguun</div>
      </div>
      <div className="homeBody">
        <div className="homeLogo">
          <img className="boginoLogo" src="img/boginoLogo.svg" />
        </div>
        <div className="homeBodytexts">
          <input
            className="homeBodyInp"
            onChange={Sonsogch}
            placeholder="https://www.web-huudas.mn"
          />
          <button className="homeHeaderButton1">Богиносгох</button>
        </div>
        <div id="tuuhHadgalah">
          <div id="Tuuh">Түүх</div>
          <div id="Historys">
            <div id="withZuraas">
              <div id="HistoryOne">
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
              <div id="zuraas"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="img/credit.svg" />
      </div>
    </div>
  );
};

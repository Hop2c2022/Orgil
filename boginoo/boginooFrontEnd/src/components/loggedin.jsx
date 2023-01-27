import React from "react";
import "./loggedin.css";
import { useState } from "react";
import axios from "axios";
export const Loggedin = () => {
  const [Url, setUrl] = useState("");
  const Sonsogch = (event) => {
    setUrl(event.target.value);
  };
  const a = localStorage.getItem("userData");
  console.log(a);
  const aa = localStorage.getItem("userData");
  const newAa = JSON.parse(aa);
  const Boginosgoh = async () => {
    await axios({
      method: "post",
      url: "http://localhost:8000/url",
      headers: { "Content-Type": "application/json" },
      data: {
        userid: newAa.uid,
        url: Url,
      },
    });
  };

  return (
    <div className="homeBig">
      <div className="loginHeader">
        <div className="loginHerhen">Хэрхэн ажилладаг вэ?</div>
        <div className="LogginName">{newAa.email}</div>
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
          <button className="homeHeaderButton1" onClick={Boginosgoh}>
            Богиносгох
          </button>
        </div>
      </div>
      <div></div>
      <div>
        <img src="img/credit.svg" />
      </div>
    </div>
  );
};

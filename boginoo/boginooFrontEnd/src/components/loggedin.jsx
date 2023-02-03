import React from "react";
import "./loggedin.css";
import { useState } from "react";
import axios from "axios";

export const Loggedin = () => {
  const [Url, setUrl] = useState("");
  const [short, setShort] = useState("");
  const [urtUrl, setUrtUrl] = useState("");
  const Sonsogch = (event) => {
    setUrl(event.target.value);
  };

  const aa = localStorage.getItem("userData");
  const newAa = JSON.parse(aa);
  const Boginosgoh = async () => {
    const result = await axios({
      method: "post",
      url: "http://localhost:8000/url",
      headers: { "Content-Type": "application/json" },
      data: {
        userid: newAa.uid,
        url: Url,
      },
    });
    setShort(result.data.shortid);
    setUrtUrl(result.data.url);
  };
  const HuuljAvah = () => {
    navigator.clipboard.writeText("http://localhost:8000/" + short);
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
      <div className="loggedinLink">
        <div className="loggedinLong">
          <div className="loggedinUgugdsun">Өгөгдсөн холбоос:</div>
          <div className="loggedinLongUrl">{urtUrl}</div>
        </div>
        <div className="loggedinShort">
          <div className="loggedinBogino">Богино холбоос:</div>
          <div className="loggedinUrlAguulah">
            <div className="loggedinShortUrl">
              {short ? "http://localhost:8000/" + short : ""}
            </div>
            <button className="huuljAvah" onClick={HuuljAvah}>
              Хуулж авах
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src="img/credit.svg" />
      </div>
    </div>
  );
};

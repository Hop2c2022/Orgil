import React from "react";
import { Header } from "./header";
import axios from "axios";
import { useState } from "react";
import { AuthContext, useAuthContext } from "../common/AuthProvider";

export const HomeIntial = () => {
  const [LongUrl, setLongUrl] = useState("");
  const [shortUrl, setShorturl] = useState("");
  const { isAuthenticated, userId } = useAuthContext();
  const UrlListener = (event) => {
    setLongUrl(event.target.value);
  };
  const urlAvah = async () => {
    const result = await axios({
      method: "post",
      url: "http://localhost:8000/url",
      data: {
        url: LongUrl,
      },
    });
    setShorturl(result.data);
  };

  return (
    <div className="homeBig">
      <Header />
      <div className="homeBody">
        <div className="homeLogo">
          <img className="boginoLogo" src="img/boginoLogo3.svg" />
        </div>
        <div className="homeBodytexts">
          <input
            className="homeBodyInp"
            placeholder="https://www.web-huudas.mn"
            onChange={UrlListener}
          />
          <button className="homeHeaderButton1" onClick={urlAvah}>
            Богиносгох
          </button>
        </div>
      </div>
      <div>
        <img src="img/credit.svg" />
      </div>
    </div>
  );
};

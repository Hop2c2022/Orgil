import { getValue } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React from "react";
import { useState } from "react";
import "./history.css";
export const History = () => {
  const [urls, setUrls] = useState();
  const a = localStorage.getItem("userData");
  const newA = JSON.parse(a);
  (async () => {
    const result = await axios({
      method: "get",
      url: `http://localhost:8000/url/${newA.uid}`,
      headers: { "Content-Type": "application/json" },
    });
    setUrls(result.data);
  })();

  const HuulahAvah = (urls) => {
    navigator.clipboard.writeText("http://localhost:8000/" + urls.url);
  };
  return (
    <div className="homeBig">
      <div className="loginHeader">
        <div className="loginHerhen">Хэрхэн ажилладаг вэ?</div>
        <div className="LogginName">{newA.email}</div>
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
        <div id="tuuhHadgalah">
          <div id="Tuuh">Түүх</div>
          <div id="Historys">
            {urls
              ? urls.map((el, ind) => {
                  return (
                    <div id="withZuraas">
                      <div id="HistoryOne">
                        <div id="Holboos">
                          <div id="ugugdsun">Өгөгдсөн холбоос:</div>
                          <div id="zam">{el.url}</div>
                        </div>
                        <div id="Holboos">
                          <div id="ugugdsun">Богино холбоос:</div>
                          <div id="shortenedbody">
                            <div id="shortenedbodytext1">
                              {"http://localhost:8000/" + el.shortid}
                            </div>
                            <button
                              id="shortenedbodytext2"
                              // onClick={HuulahAvah}
                            >
                              Хуулж авах
                            </button>
                          </div>
                        </div>
                      </div>
                      <div id="zuraas"></div>
                    </div>
                  );
                })
              : "loading"}
          </div>
        </div>
      </div>
      <div>
        <img src="img/credit.svg" />
      </div>
    </div>
  );
};

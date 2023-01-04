import React from "react";
export const HomeIntial = () => {
  return (
    <div className="homeBig">
      <div className="homeHeader">
        <div className="homeHeadertext1">Хэрхэн ажилладаж вэ?</div>
        <button className="homeHeaderButton1">Нэвтрэх</button>
      </div>
      <div className="homeBody">
        <div className="homeLogo">
          <img className="boginoLogo" src="img/boginoLogo3.svg" />
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

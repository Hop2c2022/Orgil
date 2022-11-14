import React from "react";
import "./cards.css";
export const Cards = () => {
  return (
    <div className="card">
      <img className="card-img" src="img/card.svg" />
      <div className="card-texts">
        <div className="card-text1">The Emotional Toll of Being in UX</div>
        <div className="card-text2">
          There are times when our work impacts us deeply — sometimes in ways we
          neither acknowledge nor understand
        </div>
        <div className="card-text3">
          <img className="card-text3-img" src="img/page1-text2.svg" />
          <div className="card-text3-name">Wade Warren</div>
          <div className="card-text3-zuras">|</div>
          <div className="card-text3-on">2nd January,2022</div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./slide5.css";
import { Slide5Cards } from "./slide5Cards";
export const Slide5 = () => {
  return (
    <div className="slide5">
      <div className="slide5Header">What people say about us</div>
      <div className="slide5cards">
        <Slide5Cards />
        <Slide5Cards />
        <Slide5Cards />
        <Slide5Cards />
      </div>
    </div>
  );
};

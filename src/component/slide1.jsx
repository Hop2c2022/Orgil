import React from "react";
import "./slide1.css";
import { Link } from "react-router-dom";
export const Slide1 = () => {
  return (
    <div className="slide1">
      <div className="header">
        <div className="team-father">
          <div className="bag">team</div>
          <div className="tsegSlide1"></div>
        </div>
        <div className="tses">
          <div className="tses-text">Products</div>
          <div className="tses-text">Services</div>
          <div className="tses-text">Contact</div>
          <Link to={"/login"}>
            <div className="tses-text">Log in</div>
          </Link>
        </div>
      </div>
      <div className="content">
        <div className="content-top">
          <div className="content-top-one">
            Instant collaborations for remote teams
          </div>
          <div className="content-top-two">
            All in one for your remote team chats, collaboration and track
            projects
          </div>
        </div>
        <div className="content-down">
          <input placeholder="    Email" className="input" />
          <button className="btn">Get early access</button>
        </div>
      </div>
    </div>
  );
};

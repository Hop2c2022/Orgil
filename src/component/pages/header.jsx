import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
export const Header = () => {
  return (
    <div className="father">
      <div className="left">
        <div className="team">team</div>
        <div className="tseg"></div>
      </div>
      <div className="menus">
        <div className="menu">Product</div>
        <div className="menu">Service</div>
        <div className="menu">Contact</div>
        <Link to={"/login"}>
          <div className="menu">Log in</div>
        </Link>
        <button className="button">Get Access</button>
      </div>
    </div>
  );
};

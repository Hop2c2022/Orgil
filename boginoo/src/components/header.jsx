import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerBody">Хэрхэн ажилладаж вэ?</div>
      <Link to={"/login"}>
        <button className="headerfooter">Нэвтрэх</button>
      </Link>
    </div>
  );
};

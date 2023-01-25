import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../common/AuthProvider";

export const Header = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <div className="header">
      <div className="headerBody">Хэрхэн ажилладаж вэ?</div>
      {isAuthenticated ? (
        <></>
      ) : (
        <Link to={"/login"}>
          <button className="headerfooter">Нэвтрэх</button>
        </Link>
      )}
    </div>
  );
};

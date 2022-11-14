import React from "react";
import "./page2.css";
import { Header } from "./header";
import { Cards } from "./cards";
export const Page2 = () => {
  return (
    <div className="page2-back">
      <br />
      <br />
      <Header />
      <div className="page2-big">
        {" "}
        <div className="etseg">
          <div className="blog-post">Blog Posts</div>
          <div className="blog-text">
            Our latest updates and blogs about managing your team
          </div>
        </div>
        <div className="cards-div">
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div className="cards-div">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};

import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./component/Home";
import { Login } from "./component/Login";
import { Blog, Page2 } from "./component/pages/page2";
import { Info } from "./component/pages/Info";
// import { Header } from "./component/pages/header";
import { Page1 } from "./component/pages/page1";
const App = () => {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/page1" element={<Page1 />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/info" element={<Info />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;

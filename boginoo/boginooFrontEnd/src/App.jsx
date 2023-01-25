import "./App.css";
import React from "react";
import { Home } from "./components/home";
import { Login } from "./components/login";
import { Signup } from "./components/signup";
import { ForgotPass } from "./components/forgotpass";
import { HomeIntial } from "./components/home-intial";
import { Shortened } from "./components/shortened";
import { Header } from "./components/header";
import { Loggedin } from "./components/loggedin";
import { History } from "./components/history";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./common/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/forgotpass" element={<ForgotPass />}></Route>
            <Route path="/homeintial" element={<HomeIntial />}></Route>
            <Route path="/shortened" element={<Shortened />}></Route>
            <Route path="/header" element={<Header />}></Route>
            <Route path="/loggedin" element={<Loggedin />}></Route>
            <Route path="/history" element={<History />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

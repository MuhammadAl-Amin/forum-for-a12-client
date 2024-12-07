import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../pages/share/Navbar/Navbar";
import Footer from "../../pages/share/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const noNavbarAndFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");

  return (
    <div className="max-w-screen-xl mx-auto min-h-screen flex flex-col justify-between">
      {noNavbarAndFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noNavbarAndFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;

import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="p-6 ">
      <NavBar />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;

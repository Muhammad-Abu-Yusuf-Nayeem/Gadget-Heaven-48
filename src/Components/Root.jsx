import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
import { TotalPriceContext } from "../utility/context";

const Root = () => {
  const [totalPrice, setTotalPrice] = useState(0);

    
  return (
    <div className=" ">
      <TotalPriceContext.Provider value={[totalPrice, setTotalPrice]}>
        <NavBar />
        <Outlet></Outlet>
        <Footer></Footer>
      </TotalPriceContext.Provider>
    </div>
  );
};

export default Root;

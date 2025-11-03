import React from "react";
import Hero from "./Hero";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

import ProductCategories from "./ProductCategories";
import GadgetCards from "./GadgetCards";
import Banner from "./Banner";

const Home = () => {
  return (
    <main className="pb-24 bg-base-200">
      <Banner></Banner>
      <div >
        <h1 className="text-center text-5xl py-16 font-bold">Explore Cutting-Edge Gadgets</h1>
        <div className="flex lg:px-38 px-10 align-center ">
          <ProductCategories />

          <GadgetCards></GadgetCards>
        </div>
      </div>
    </main>
  );
};

export default Home;

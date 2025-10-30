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
      <div className="flex px-38 align-center ">
        <ProductCategories />

        <GadgetCards></GadgetCards>
      </div>
    </main>
  );
};

export default Home;

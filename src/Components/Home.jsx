import { useState, useEffect } from "react";
import Hero from "./Hero";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

import ProductCategories from "./ProductCategories";
import GadgetCards from "./GadgetCards";
import Banner from "./Banner";
import { TotalPriceContext } from "../utility/context";
import { useContext } from "react";

const Home = () => {

  const [totalPrice, setTotalPrice] = useContext(TotalPriceContext);

   
     
   
  const [category, setCategory] = useState("");
  console.log(category,totalPrice);
  return (
    <main className="pb-24 bg-base-200">
      <Banner></Banner>
      <div>
        <h1 className="text-center text-5xl py-16 font-bold">
          Explore Cutting-Edge Gadgets
        </h1>

        <div className="flex lg:px-38 px-10 align-center ">

            <ProductCategories setCategory={setCategory} />
           

            <GadgetCards category={category}></GadgetCards>

        </div>
      </div>
    </main>
  );
};

export default Home;

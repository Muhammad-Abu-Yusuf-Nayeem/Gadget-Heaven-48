import React from "react";
import Hero from "./Hero";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";
import ProductCategories from "./ProductCategories";
import GadgetCards from "./GadgetCards";

const Home = () => {
  return (
    <main className="pb-24 bg-base-200">
      <div className="flex">
        <div className=" bg-[#9538E2] w-full mx-6 rounded-2xl mb-148">
          <div className="hero-content text-center flex flex-col mx-auto relative pb-76">
            <NavBar color="text-white font-semibold" className="">
              {" "}
            </NavBar>
            <div className="w-7/10 ">
              <h1 className="text-5xl font-bold  mx-auto text-white">
                Upgrade Your Tech Accessorize with Gadget Heaven Accessories
              </h1>
              <p className="py-6 text-gray-300 text-sm w-7/10 mx-auto">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
              <Link className="rounded-full bg-amber-50 py-3 px-8 z-10 text-purple-500 font-bold text-2xl">
                Shop Now
              </Link>
            </div>
            <div className="w-9/10 p-6 backdrop-blur-sm bg-white/30 rounded-4xl border-white border-4 absolute bottom-[-550px] ">
              <img className="mx-auto rounded-3xl" src={banner} alt="banner" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-20 align-center ">
        <ProductCategories />

        <GadgetCards></GadgetCards>
      </div>
    </main>
  );
};

export default Home;

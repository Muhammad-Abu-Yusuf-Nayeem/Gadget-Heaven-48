import React from "react";
import DetailsCard from "./DetailsCard";
import HeaderCard from "./HeaderCard";

const ProDetails = () => {
  return (
    <div className="bg-base-200">
      {/* Purple header section */}
      <div className="bg-[#9538E2] pb-40">
        <HeaderCard headerTitle="Product Details" />
      </div>

      {/* Overlapping card (still in normal flow) */}
      <div className="-mt-32 md:-mt-40 w-10/12 md:w-8/12 mx-auto bg-white rounded-4xl shadow-lg p-6 backdrop-blur-sm relative z-10">
        <DetailsCard />
      </div>
    </div>
  );
};

export default ProDetails;

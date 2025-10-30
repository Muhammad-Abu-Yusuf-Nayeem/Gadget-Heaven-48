import React from "react";
import DetailsCard from "./DetailsCard";
import HeaderCard from "./HeaderCard";

const ProDetails = () => {
  return (
    <div className="bg-base-200 relative">
      <div className="relative pb-40 bg-[#9538E2] mb-152">
        <HeaderCard />
      </div>

      <div className="absolute top-68 left-0 right-0 pb-8 w-7/10 mx-auto p-6 backdrop-blur-sm bg-white rounded-4xl ">
        <DetailsCard />
      </div>
    </div>
  );
};

export default ProDetails;

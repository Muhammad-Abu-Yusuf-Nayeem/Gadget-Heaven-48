import React from "react";

const GadCard = ({ product }) => {
  const { product_title, product_image, price } = product;
  return (
    <div className="  rounded-xl shadow-xl p-4">
      <div className="rounded-lg flex justify-center items-center p-4 ">
        <img
          className="mx-auto rounded-lg h-40"
          src={product_image}
          alt=""
        />
      </div>
      <h2 className="font-bold text-xl">{product_title}</h2>
      <h2 className="font-bold my-1 text-gray-600">Price: ${price}</h2>

      <button className="btn btn-outline btn-primary rounded-full my-2">
        View Details
      </button>
    </div>
  );
};

export default GadCard;

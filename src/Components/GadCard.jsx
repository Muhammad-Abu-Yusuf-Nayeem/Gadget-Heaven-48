import React from "react";
import { Link } from "react-router-dom";

const GadCard = ({ product }) => {
  const handleViewDetails = (id) => {
    console.log("View details for product ID:", id);
  };

  const { product_title, product_image, price, product_id } = product;
  return (
    <Link to={`/products/${product_id}`}>
      <div className="  rounded-xl shadow-xl p-4 border border-gray-200 ">
        <div className="rounded-lg flex justify-center items-center p-4 ">
          <img className="mx-auto rounded-lg h-40" src={product_image} alt="" />
        </div>
        <h2 className="font-bold text-xl">{product_title}</h2>
        <h2 className="font-bold my-1 text-gray-600">Price: ${price}</h2>

        <button
          onClick={() => handleViewDetails(product_id)}
          className="btn btn-outline btn-primary rounded-full my-2"
        >
          View Details
        </button>
      </div>
    </Link>
  );
};

export default GadCard;

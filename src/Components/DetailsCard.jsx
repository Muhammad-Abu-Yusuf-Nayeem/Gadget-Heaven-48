import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import cartImg from "../assets/cart.png";
import wishImg from "../assets/wish.png";

const DetailsCard = () => {
  const { productId } = useParams();
  const data = useLoaderData();

  const product = data.find((product) => product.product_id == productId);
  console.log(productId, { product });
  const {
    product_title,
    product_image,

    price,
    description,
    specification,
    availability,
    rating,
  } = product;
  return (
    <div className="">
      <div className="hero-content grid grid-cols-5 gap-10">
        <div className="col-span-2  ">
          <img src={product_image} className=" rounded-lg " />
        </div>
        <div className="space-y-2 col-span-3">
          <h1 className="text-2xl  font-bold">{product_title}</h1>
          <h2 className="font-bold text-xl text-gray-700">Price: ${price}</h2>
          <div
            className={`badge badge-secondary px-4 py-3.5 my-2 font-semibold ${
              availability
                ? "text-[#2f9c08] bg-[#2f9c0827] border-green-700 rounded-full"
                : "bg-gray-500 border-gray-700"
            }`}
          >{`${availability ? "In Stock" : " Out of Stock"}`}</div>

          <p className="font-semibold text-gray-500">{description}</p>
          <p>
            <span className="font-bold">Specification: </span>
            {specification.map((data) => {
              const parts = data.split(":"); // split by colon
              return (
                <p key={data} className="grid grid-cols-5 space-y-1">
                  <span className="font-bold text-gray-500">{parts[0]}: </span>
                  <span className="text-gray-500 font-regular col-span-4">
                    {parts[1]}
                  </span>{" "}
                </p>
              );
            })}
          </p>
          <h4 className=" items-center gap-2 font-bold text-xl mt-4">
            <span className="flex items-center align-center ">
              <span className="">Rating </span>
              <span className="">
                <img
                  className="w-7"
                  src="https://img.icons8.com/emoji/48/star-emoji.png"
                  alt=""
                />
              </span>
            </span>
            <span className="flex items-center gap-2 my-4">
              <span className="flex items-center gap-1">
                {Array.from({ length: 5 }, (_, i) => {
                  const fullStar =
                    "https://img.icons8.com/emoji/48/star-emoji.png"; // yellow
                  const halfStar =
                    "https://img.icons8.com/color/48/star-half-empty.png"; // half yellow
                  const emptyStar =
                    "https://img.icons8.com/windows/32/star--v1.png"; // red

                  const diff = rating - i;

                  let starSrc;
                  if (diff >= 1) starSrc = fullStar;
                  else if (diff >= 0.5) starSrc = halfStar;
                  else starSrc = emptyStar;

                  return (
                    <img key={i} className="w-6" src={starSrc} alt="star" />
                  );
                })}
              </span>
              <span className="ml-2 border rounded-full px-1 text-sm">
                {rating.toFixed(1)}
              </span>
            </span>
          </h4>

          <div className="flex  gap-6 pt-4">
            <button className="btn btn-primary flex gap-3 rounded-full py-4 px-6 bg-[#9538E2] border-0 text-xl">
              <span>Add To Card</span>{" "}
              <img src={cartImg} alt="Cart" className="w-5 h-5" />
            </button>
            <Link className="bg-white p-3 rounded-full border border-gray-300  ">
              <img src={wishImg} alt="Cart" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;

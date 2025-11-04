import React, { useEffect, useState } from "react";
import WishCard from "./Cart/WishCard";
import { getDataFromLS } from "../utility/DB";

const Wishlist = () => {
  const [products, setProducts] = useState([]);
  const [wishListId, setWishListId] = useState([]);

  // Load wishlist IDs
  useEffect(() => {
    const wishList = getDataFromLS("WishList") || [];
    setWishListId(wishList);
  }, []);

  // Load all product data
  useEffect(() => {
    fetch("/Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  // useEffect(() => {
  //   console.log("Wishlist:", wishListId);
  //   console.log("Products:", products);
  // }, [wishListId, products]);

  

  return (
    <div className="flex flex-col">
      <nav className="flex w-full justify-between px-8 py-4">
        <div className="font-bold text-2xl">Wishlist</div>
      </nav>

      <div className="space-y-6 m-10 mx-auto rounded-xl">
        {wishListId.map((id) => (
          <WishCard
            key={id}
            products={products}
            productId={id}
            setWishListId={setWishListId}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

import React, { createContext, useEffect, useState } from "react";
import CartCard from "./Cart/CartCard";
import { getDataFromLS } from "../utility/DB";

export const TotalPriceContext = createContext(0);

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [cartId, setCartId] = useState([]);
  const [wishListId, setWishListId] = useState([]);

  // // ✅ Run this once (fixes infinite re-render)
  // useEffect(() => {
  //   setTotalPrice(100);
  // }, []);

  // ✅ Load LocalStorage data once
  useEffect(() => {
    const cartList = getDataFromLS("shoppingCart") || [];
    const wishList = getDataFromLS("Wishlist") || [];
    setCartId(cartList);
    setWishListId(wishList);
  }, []);

  // ✅ Fetch product data once
  useEffect(() => {
    fetch("/Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div className="flex flex-col">
      <nav className="flex w-full justify-between px-8 py-4">
        <div className="font-bold text-2xl">Cart</div>
        <div className="flex gap-4 justify-center items-center">
          <h3 className="font-bold text-2xl">Total price: {totalPrice}</h3>
          <button className="btn btn-outline btn-secondary rounded-full text-xl text-[#8b27ddd7] border-[#8b27ddd8] px-8">
            <span>Sort by</span>
            <span>
              <img
                className="w-6"
                src="https://img.icons8.com/pulsar-gradient/48/horizontal-settings-mixer.png"
                alt=""
              />
            </span>
          </button>
          <button className="btn btn-active btn-secondary rounded-full text-xl px-8 bg-linear-to-b from-purple-500 from-70% to-yellow-100">
            Purchase
          </button>
        </div>
      </nav>

      <TotalPriceContext.Provider value={[totalPrice, setTotalPrice]}>
        <div className="space-y-6 m-10 mx-auto rounded-xl">
          {cartId.map((id) => (
            <CartCard
              key={id}
              products={products}
              productId={id}
              wishListId={wishListId}
            />
          ))}
        </div>
      </TotalPriceContext.Provider>
    </div>
  );
};

export default Cart;

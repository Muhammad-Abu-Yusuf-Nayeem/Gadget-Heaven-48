import React from "react";
import { TotalPriceContext } from "./context";
import { toast } from "react-toastify";

const addToLocalStorage = (id, storageName, totalPrice) => {
  let cart = getDataFromLS(storageName);

  // Defensive fix: ensure cart is always an array
  if (!Array.isArray(cart)) cart = [];

  if (totalPrice > 5000 && storageName === "ShoppingCart") {
    toast(`Item exceeds the price limit in ${storageName}`);
  } else if (cart.includes(id)) {
    toast(`Item already in ${storageName}`);
  } else {
    cart.push(id);
    toast(`Item added to ${storageName}`);
    localStorage.setItem(storageName, JSON.stringify(cart));
  }
};
const removeFromLocalStorage = (id, storageName, setCartId) => {
  let cart = getDataFromLS(storageName);
  // Check if the id exists in the array
  if (cart.includes(id)) {
    // Remove the specific id
    cart = cart.filter((item) => item !== id);
    // Save updated list to localStorage
    localStorage.setItem(storageName, JSON.stringify(cart));
    setCartId(cart);
    toast(`Removed from ${storageName}`);
  }
};

// const removeFromLocalStorage = (id, storageName, setState) => {
//   let data = JSON.parse(localStorage.getItem(storageName)) || [];
//   data = data.filter((item) => item !== id);
//   localStorage.setItem(storageName, JSON.stringify(data));
//   if (setState) setState(data);
// };

const getDataFromLS = (storageName) => {
  const data = localStorage.getItem(storageName);
  return data ? JSON.parse(data) : [];
};

const resetCart = () => {
  localStorage.setItem("ShoppingCart", JSON.stringify([]));
};

export { addToLocalStorage, getDataFromLS, removeFromLocalStorage, resetCart };

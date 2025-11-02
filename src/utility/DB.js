import React from "react";

import { toast } from "react-toastify";

const addToLocalStorage = (id, storageName) => {
  let cart = getDataFromLS(storageName);
  if (cart.includes(id)) {
    toast(`Item already in ${storageName}`);
  } else {
    cart.push(id);
    toast(`Item added in to ${storageName}`);
    localStorage.setItem(storageName, JSON.stringify(cart));
  }
};

const getDataFromLS = (storageName) => {
  const data = localStorage.getItem(storageName);
  return data ? JSON.parse(data) : [];
};

export { addToLocalStorage, getDataFromLS };

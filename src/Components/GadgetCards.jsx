import React, { useState, useEffect } from "react";

const GadgetCards = () => {
  const [data, setData] = useState([]); // This will hold the gadget data
  useEffect(() => {
    fetch("/Products.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching gadget data:", error));
  }, []);

  console.log(data); // Log the fetched data to verify

  return <div></div>;
};

export default GadgetCards;

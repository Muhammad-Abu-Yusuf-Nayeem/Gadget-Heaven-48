import React, { useState, useEffect } from "react";
import GadCard from "./GadCard";

const GadgetCards = ({ category = "" }) => {
  const [data, setData] = useState([]); // This will hold the gadget data
  useEffect(() => {
    fetch("/Products.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching gadget data:", error));
  }, []);

  // console.log(data); // Log the fetched data to verify

  const productCategory = data.filter((prod) => prod.category == category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {category === ""
        ? data.map((product, index) => (
            <GadCard key={index} product={product} />
          ))
        : productCategory.map((product, index) => (
            <GadCard key={index} product={product} />
          ))}
    </div>
  );
};

export default GadgetCards;

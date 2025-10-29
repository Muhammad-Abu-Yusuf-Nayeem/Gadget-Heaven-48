import React, { useState, useEffect } from "react";
import GadCard from "./GadCard";


const GadgetCards = () => {
  const [data, setData] = useState([]); // This will hold the gadget data
  useEffect(() => {
    fetch("/Products.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching gadget data:", error));
  }, []);

  // console.log(data); // Log the fetched data to verify

  return <div className="grid grid-cols-4 gap-6">
    {
      data.map((product, index) => <GadCard key = { index }  product = {product} />)
    }
    
    </div>;
};

export default GadgetCards;

import React, { useEffect, useState } from "react";


const CartDisplay = () => {
  const [products, setProducts] = useState([]);

  // Fetch only once when component mounts
  useEffect(() => {
    fetch("/Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  // Find the product safely
  const selectedProduct = products.find(
    (product) => product.product_id === "SW-005"
  );

  // If data hasn’t loaded yet or product not found, handle it gracefully
  if (!selectedProduct) {
    return <p className="text-center mt-20 text-xl">Loading product...</p>;
  }

  const {
   
    product_title,
    product_image,
    price,
    description,
  } = selectedProduct;

  return (
    <div className="flex flex-col">
      <nav className="flex w-full justify-between px-8 py-4">
        <div className="font-bold text-2xl">Cart</div>
        <div className="flex gap-4 justify-center items-center">
          <h3 className="font-bold text-2xl">Total price</h3>
          <button className="btn btn-outline btn-secondary rounded-full text-xl text-[#8b27ddd7] border-[#8b27ddd8] px-8">
            Sort by
          </button>
          <button className="btn btn-active btn-secondary rounded-full text-xl px-8 bg-linear-to-b from-purple-500 from-70% to-yellow-100">
            Purchase
          </button>
        </div>
      </nav>

      <div className="flex justify-center items-center gap-2 my-10 mx-auto w-10/12  bg-white ">
        <div className="flex  gap-8 border border-gray-400 rounded-xl">
          <div>
            <img src={product_image} className="w-40" alt={product_title} />
          </div>
          <div className="card w-8/12 ">
            <div className="card-body">
              <h2 className="card-title">{product_title}</h2>
              <p className=" text-gray-500 text-sm font-semibold">
                {description}
              </p>
              <h2 className="card-title text-gray-700  font-semibold">
                Price: ${price}
              </h2>
            </div>
          </div>
          <button className="btn btn-primary text-lg rounded-full  mt-5 font-thin text-red-600 border-white shadow-none  bg-white ">
            <img
              src="https://img.icons8.com/color/48/cancel--v1.png"
              className="w-7"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDisplay;

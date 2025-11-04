import React from "react";


const ProductCategories = ({ setCategory }) => {
  const handleCategoryClicked = (categoryName) => {
    setCategory(categoryName);
  }
  return (
    <div>
      <div className="border border-gray-200 rounded-lg shadow-xl h-auto p-2 mr-6 ">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-auto py-3 px-6">
          {/* Sidebar content here */}
          <li>
            <button
              onClick={() => handleCategoryClicked("")}
              className="rounded-full bg-gray-200 px-6 py-2.5 text-lg my-3 "
            >
              All Products
            </button>
          </li>
          <li>
            <button
              onClick={() => handleCategoryClicked("Laptop")}
              className="rounded-full bg-gray-200 px-6 py-2.5 text-lg my-3"
            >
              Laptops
            </button>
          </li>
          <li>
            <button
              onClick={() => handleCategoryClicked("Smartphone")}
              className="rounded-full bg-gray-200 px-6 py-2.5 text-lg my-3"
            >
              Phones
            </button>
          </li>
          <li>
            <button
              onClick={() => handleCategoryClicked("Accessories")}
              className="rounded-full bg-gray-200 px-6 py-2.5 text-lg my-3"
            >
              Accessories
            </button>
          </li>
          <li>
            <button
              onClick={() => handleCategoryClicked("Smartwatch")}
              className="rounded-full bg-gray-200 px-6 py-2.5 text-lg my-3"
            >
              Smart Watches
            </button>
          </li>
          <li>
            <button className="rounded-full bg-gray-200 px-6 py-2.5 text-lg my-3">
              MacBook
            </button>
          </li>
          <li>
            <button className="rounded-full bg-gray-200 px-6 py-2.5 text-lg my-3">
              Iphone
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCategories;

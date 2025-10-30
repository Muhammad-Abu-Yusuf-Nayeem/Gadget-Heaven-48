import React from "react";
import { Link } from "react-router-dom";

const ProductCategories = () => {
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
            <Link className="rounded-full bg-gray-200 px-6 py-2.5 text-lg my-3 ">
              All Products
            </Link>
          </li>
          <li>
            <Link className="rounded-full bg-gray-200 px-6 py-2.5 text-lg my-3">
              Laptops
            </Link>
          </li>
          <li>
            <Link className="rounded-full bg-gray-200 px-6 py-2.5 text-lg my-3">
              Phones
            </Link>
          </li>
          <li>
            <Link className="rounded-full bg-gray-200 px-6 py-2.5 text-lg my-3">
              Accessories
            </Link>
          </li>
          <li>
            <Link className="rounded-full bg-gray-200 px-6 py-2.5 text-lg my-3">
              Smart Watches
            </Link>
          </li>
          <li>
            <Link className="rounded-full bg-gray-200 px-6 py-2.5 text-lg my-3">
              MacBook
            </Link>
          </li>
          <li>
            <Link className="rounded-full bg-gray-200 px-6 py-2.5 text-lg my-3">Iphone</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCategories;

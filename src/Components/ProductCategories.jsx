import React from "react";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  return (
    <div>
      <div className="">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <Link>All Products</Link>
          </li>
          <li>
            <Link>Laptops</Link>
          </li>
          <li>
            <Link>Phones</Link>
          </li>
          <li>
            <Link>Accessories</Link>
          </li>
          <li>
            <Link>Smart Watches</Link>
          </li>
          <li>
            <Link>MacBook</Link>
          </li>
          <li>
            <Link>Iphone</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCategories;

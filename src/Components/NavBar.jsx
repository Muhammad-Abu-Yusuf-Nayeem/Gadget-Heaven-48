import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = ({ color }) => {
  const location = useLocation();
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            location.pathname === "/"
              ? `${color} underline font-bold text-[16px]`
              : isActive
              ? "underline font-bold text-[16px]"
              : "text-gray-500 font-semibold text-[16px]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            location.pathname === "/"
              ? `${color} text-[16px]`
              : isActive
              ? "underline font-bold text-[#9538E2] text-[16px]"
              : "text-gray-500 font-semibold text-[16px]"
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            location.pathname === "/"
              ? `${color} text-[16px]`
              : isActive
              ? "underline font-bold text-[#9538E2] text-[16px]"
              : "text-gray-500 font-semibold text-[16px]"
          }
        >
          Dashboard
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-white underline font-bold " : "text-[#9538E2]"
          }
        >
          Item 3
        </NavLink>
      </li> */}
    </>
  );
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "text-white font-bold text-2xl"
              : "font-bold text-2xl"
          }
        >
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "bg-white rounded-full border-gray-200 border p-2 "
              : "rounded-full border-gray-200 border p-2  "
          }
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/material-outlined/24/shopping-cart--v1.png"
            alt="shopping-cart--v1"
          />
        </Link>
        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "bg-white rounded-full border-gray-200 border p-2 "
              : "rounded-full border-gray-200 border p-2  "
          }
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/material-outlined/24/filled-like.png"
            alt="filled-like"
          />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

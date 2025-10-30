import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import cartImg from "../assets/cart.png";
import wishImg from "../assets/wish.png";

const NavBar = () => {
  const location = useLocation();
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "font-bold underline" : "font-semibold "} ${
              location.pathname === "/" ? "text-white" : "text-gray-500"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            `${location.pathname === "/" ? "text-white" : ""}
            ${
              isActive
                ? "font-bold text-[#9538E2]"
                : "font-semibold text-gray-500"
            }`
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          // className={({ isActive }) =>
          //   `${isActive ? "font-bold  " : "font-semibold "}
          //   ${location.pathname === "/" ? "text-white" : "text-[#9538E2]"}`
          // }
          className={({ isActive }) =>
            `${location.pathname === "/" ? "text-white" : ""}
            ${
              isActive
                ? "font-bold text-[#9538E2]"
                : "font-semibold text-gray-500"
            }`
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div className=" mx-6 mt-6">
      <div
        className={`${
          location.pathname === "/" ? "bg-[#9538e2]" : "bg-white"
        } navbar rounded-t-2xl px-32`}
      >
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>
          <Link
            className={`font-bold text-xl ${
              location.pathname === "/" ? "text-white" : ""
            }`}
          >
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-4">
          <Link className="bg-white p-2 rounded-full border border-gray-300">
            <img src={cartImg} alt="Cart" className="w-5 h-5" />
          </Link>
          <Link className="bg-white p-2 rounded-full border border-gray-300">
            <img src={wishImg} alt="Cart" className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = ({ cartCount }) => {
  return (
    <div className="shadow-sm bg-base-200">
      <div className="max-lg:collapse w-full rounded-md container mx-auto lg:px-8">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar">
          <div className="navbar-start">
            <label
              htmlFor="navbar-1-toggle"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <p className="ml-2 lg:ml-0 text-4xl leading-relaxed font-bold bg-linear-to-r from-[#602FF7] to-[#9415FA] text-transparent bg-clip-text">
              DigiTools
            </p>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold opacity-80">
              <li>
                <button>Products</button>
              </li>
              <li>
                <button>Features</button>
              </li>
              <li>
                <button>Pricing</button>
              </li>
              <li>
                <button>Testimonials</button>
              </li>
              <li>
                <button>FAQ</button>
              </li>
            </ul>
          </div>
          <div className="navbar-end space-x-3">
            <button className="relative btn rounded-full border-none bg-transparent shadow-none text-xl hidden sm:block">
              <FaShoppingCart />
              {cartCount > 0 && (
                <span className="absolute top-2 right-3 bg-red-500 text-white text-[8px] px-1 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="btn rounded-full hidden sm:block">Login</button>
            <button className="btn bg-linear-to-r from-[#602FF7] to-[#9415FA] text-white rounded-full">
              Get Started
            </button>
          </div>
        </div>

        <div className="collapse-content lg:hidden z-1">
          <ul className="menu">
            <li>
              <button>Products</button>
            </li>
            <li>
              <button>Features</button>
            </li>
            <li>
              <button>Pricing</button>
            </li>
            <li>
              <button>Testimonials</button>
            </li>
            <li>
              <button>FAQ</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

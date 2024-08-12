import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-cyan-500 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className=" text-4xl font-bold">
          <Link to="/">
            <h1>DomainHive</h1>
          </Link>
        </div>

        {/* Hamburger Menu (for mobile) */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className=" focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <div className="hidden md:flex space-x-4">
          <nav className="flex items-center space-x-4 font-semibold text-sm">
            <NavLink to="/" className="">
              Home
            </NavLink>
            <NavLink to="/packages" className="">
              Packages
            </NavLink>
            <NavLink to="/help" className="">
              Help
            </NavLink>
            <NavLink to="/contacts" className="">
              Contacts
            </NavLink>
          </nav>
          <Link>
            <button className="block px-4 py-2 text-white bg-purple-500 hover:bg-purple-600 rounded-lg">
              SignUp
            </button>
          </Link>
        </div>
      </div>

      {/* Animated Dropdown Menu for mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 transform font-semibold text-sm ${
          isOpen
            ? "max-h-50 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-5"
        }`}
      >
        <Link to="/" className="block px-4 py-1 ">
          Home
        </Link>
        <Link to="/packages" className="block px-4 py-1 ">
          Packages
        </Link>
        <Link to="/help" className="block px-4 py-1 ">
          Help
        </Link>
        <Link to="/contacts" className="block px-4 py-1 ">
          Contact
        </Link>
        <Link>
          <button className="block px-4 py-1 text-white bg-blue-500 hover:bg-blue-600">
            SignUp
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

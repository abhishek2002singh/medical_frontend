import React, { useState } from "react";
import { Link } from "react-router-dom";

const Prenav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-4 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <img
            src="https://medanta.s3.ap-south-1.amazonaws.com/technologies/February2024/fokL3D8sSOClOGRzJX3UEKuFHDGMeZ-metaQ3liZXItS25pZmVfNTE0eDQwMC5wbmc=-.png"
            alt="Logo"
            className="h-12 w-12 rounded-full mr-2"
          />
          MedCare
        </div>

        {/* Menu Button (Mobile) */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <ul
          className={`md:flex md:items-center absolute md:static bg-blue-600 md:bg-transparent left-0 w-full md:w-auto p-4 md:p-0 transition-all duration-300 ease-in ${
            menuOpen ? "top-16 opacity-100" : "top-[-300px] opacity-0 md:opacity-100"
          }`}
        >
          <li className="md:mx-4 my-2 md:my-0">
            <a href="#" className="hover:text-yellow-300 transition duration-300">
              Home
            </a>
          </li>
          <li className="md:mx-4 my-2 md:my-0">
            <a href="#" className="hover:text-yellow-300 transition duration-300">
              About
            </a>
          </li>
          <li className="md:mx-4 my-2 md:my-0">
            <a href="#" className="hover:text-yellow-300 transition duration-300">
              Services
            </a>
          </li>
          <li className="md:mx-4 my-2 md:my-0">
            <a href="#" className="hover:text-yellow-300 transition duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Login Button */}
        <Link to='/login'>
        <button className="hidden md:inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition-all duration-300">
          
          Login
          </button>
          </Link>
      </div>
    </nav>
  );
};

export default Prenav;

import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaAddressBook, FaSignInAlt } from "react-icons/fa";
import { PUBLIC_PATHS } from "../routes/pagePaths";

const Navbar: React.FC = () => {
  return (
    <header className="bg-[#003699] text-white p-4 flex justify-between items-center">
      <h1 className="text-xl md:text-2xl font-bold flex items-center">
        <FaAddressBook className="inline-block mr-2 text-lg md:text-2xl" />
        <span className="hidden sm:inline">Contact Keeper</span>
        <span className="sm:hidden">CK</span>
      </h1>
      <nav className="flex items-center space-x-4 md:space-x-6">
        <Link
          className="flex items-center text-sm md:text-base hover:underline hover:text-[#FFA500] transition duration-300 ease-in-out"
          to={PUBLIC_PATHS.LOGIN}
        >
          <span className="mr-1">Login</span>
          <FaSignInAlt />
        </Link>
        <Link
          className="flex items-center text-sm md:text-base hover:underline hover:text-[#FFA500] transition duration-300 ease-in-out"
          to={PUBLIC_PATHS.SIGNUP}
        >
          <span className="mr-1">Signup</span>
          <FaUserCircle />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaAddressBook,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { PUBLIC_PATHS } from "../routes/pagePaths";
import { useAuth } from "../context/AuthContext";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <header className="bg-[#003699] text-white p-4 flex justify-between items-center">
      <h1 className="text-xl md:text-2xl font-bold flex items-center">
        <FaAddressBook className="inline-block mr-2 text-lg md:text-2xl" />
        <span className="hidden sm:inline">Contact Keeper</span>
        <span className="sm:hidden">CK</span>
      </h1>
      <nav className="flex items-center space-x-4 md:space-x-6">
        {user ? (
          <>
            <span className="text-sm md:text-base capitalize flex items-center">
              <FaUserCircle className="mr-2" />
              Welcome, {user.name}
            </span>
            <button
              onClick={() => logout(navigate)}
              className="flex items-center text-sm md:text-base hover:underline hover:text-[#FFA500] transition duration-300 ease-in-out"
            >
              <span className="mr-1">Logout</span>
              <FaSignOutAlt />
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

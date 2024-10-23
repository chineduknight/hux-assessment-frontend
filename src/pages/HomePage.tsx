import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaAddressBook, FaSignInAlt } from "react-icons/fa";

const HomePage: React.FC = () => {
  return (
    <div className="homepage min-h-screen flex flex-col">
      {/* Header / Navbar */}
      <header className="bg-[#003699] text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <FaAddressBook className="inline-block mr-2" />
          Contact Keeper
        </h1>
        <nav className="flex items-center space-x-6">
          <Link
            className="flex items-center hover:underline hover:text-[#FFA500] transition duration-300 ease-in-out"
            to="/login"
          >
            <span className="mr-1">Login</span>
            <FaSignInAlt />
          </Link>
          <Link
            className="flex items-center hover:underline hover:text-[#FFA500] transition duration-300 ease-in-out"
            to="/signup"
          >
            <span className="mr-1">Signup</span>
            <FaUserCircle />
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero bg-gray-100 p-8 text-center flex-1">
        <h2 className="text-3xl font-bold mb-4">
          Keep Track of Your Contacts Easily!
        </h2>
        <p className="text-lg mb-6">
          Contact Keeper helps you manage and organize your personal and
          professional contacts all in one place.
        </p>
        <Link
          to="/signup"
          className="bg-[#003699] text-white px-6 py-3 rounded hover:bg-[#002b80]"
        >
          Get Started Now
        </Link>
      </section>

      {/* Features Section */}
      <section className="features bg-white p-8 grid md:grid-cols-3 gap-6 text-center">
        <div className="feature-item border p-4 rounded hover:shadow-md">
          <FaUserCircle size={48} className="text-[#003699] mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Personal Contacts</h3>
          <p>
            Easily keep track of your personal contacts with dedicated sections
            for important details.
          </p>
        </div>
        <div className="feature-item border p-4 rounded hover:shadow-md">
          <FaAddressBook size={48} className="text-[#003699] mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Professional Contacts</h3>
          <p>
            Organize professional connections and manage them efficiently for
            easy access when needed.
          </p>
        </div>
        <div className="feature-item border p-4 rounded hover:shadow-md">
          <FaSignInAlt size={48} className="text-[#003699] mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Secure Login</h3>
          <p>
            Keep your data safe with secure login and authentication, ensuring
            your information is protected.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003699] text-white p-4 text-center mt-auto">
        <p>
          &copy; {new Date().getFullYear()} Contact Keeper. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;

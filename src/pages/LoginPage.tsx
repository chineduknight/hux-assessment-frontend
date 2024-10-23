// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import { PUBLIC_PATHS, PROTECTED_PATHS } from "../routes/pagePaths";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulated login logic - replace with actual API request
    if (email === "test@example.com" && password === "password123") {
      toast.success("Successfully logged in!");
      navigate(PROTECTED_PATHS.CONTACTS); // Redirect to contacts page on successful login
    } else {
      console.log("show error message");

      toast.error("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-page flex justify-center items-center min-h-[calc(100vh-4rem)] bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#003699]">
            <FaUserCircle className="inline-block mr-2" /> Account Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-[#003699]"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-[#003699]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#003699] text-white p-3 rounded hover:bg-[#002b80] transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-4">
            Don’t have an account?{" "}
            <Link
              to={PUBLIC_PATHS.SIGNUP}
              className="text-[#FFA500] hover:underline transition duration-300"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

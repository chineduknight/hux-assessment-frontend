import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import { PUBLIC_PATHS } from "../routes/pagePaths";
import { useAuth } from "context/AuthContext";
import { useSignupMutation } from "services/api/hooks/auth";

const SignupPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const mutation = useSignupMutation(login, navigate);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form fields
    if (password !== confirmPassword) {
      toast.error("Passwords do not match. Please try again.");
      return;
    }

    mutation.mutate({ name, email, password });
  };

  return (
    <>
      <Navbar />
      <div className="signup-page flex justify-center items-center min-h-[calc(100vh-4rem)] bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#003699]">
            <FaUserPlus className="inline-block mr-2" /> Account Register
          </h2>

          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-[#003699]"
              />
            </div>
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
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full p-3 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-[#003699]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#003699] text-white p-3 rounded hover:bg-[#002b80] transition duration-300"
            >
              {mutation.isPending ? "Registering..." : "Register"}
            </button>
          </form>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link
              to={PUBLIC_PATHS.LOGIN}
              className="text-[#FFA500] hover:underline transition duration-300"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;

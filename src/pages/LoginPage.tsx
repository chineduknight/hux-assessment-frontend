import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { PUBLIC_PATHS } from "../routes/pagePaths";
import { useAuth } from "context/AuthContext";
import { useLoginMutation } from "services/api/auth";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuth();
  const navigate = useNavigate();

  // Use the login mutation hook
  const mutation = useLoginMutation(login, navigate);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ email, password });
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
              {mutation.isPending ? "Logging in..." : "Login"}
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

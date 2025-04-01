"use client";

import React, { useState } from "react";
import { sendRequest } from "../lib/send-request";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await sendRequest.post("/user/login", {
        email,
        password,
      });
      if (response.status === 200) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-500">Login to your account</p>

        {error && <div className="text-red-500 text-center mt-2">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-5 mt-4">
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-500 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition duration-300"
          >
            {loading ? <FaSpinner className="animate-spin" /> : "Login"}
          </button>
          <button
            type="button"
            className="w-full py-2 text-blue-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300"
            onClick={() => router.push(`/signup/`)}
          >
            {"Don't have an account? Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

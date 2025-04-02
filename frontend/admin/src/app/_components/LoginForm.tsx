"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface LoginFormProps {
  onLogin: (username: string, password: string) => boolean;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();

  const handleLogin = () => {
    if (onLogin(credentials.username, credentials.password)) {
      router.push("/admin"); // Амжилттай нэвтэрвэл admin page рүү шилжинэ
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
        <h2 className="text-2xl font-semibold text-center border-b pb-3 text-black">
          Admin Login
        </h2>
        <div className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

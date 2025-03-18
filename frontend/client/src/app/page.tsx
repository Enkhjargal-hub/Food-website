"use client";  
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const getMessage = async () => {
    try {
      const res = await axios.get("http://localhost:8000/");
      setMessage(res.data.message);
    } catch (error) {
      console.error("Алдаа гарлаа:", error);
    }
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <div>
      <p>Hi</p>
      <p>Серверийн мессеж: {message}</p>
    </div>
  );
}


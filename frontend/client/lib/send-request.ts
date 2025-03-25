import axios from "axios";

export const sendRequest = axios.create({
  baseURL: "http://localhost:5000/api", // серверийн URL-ээ тааруулна уу
  headers: {
    "Content-Type": "application/json",
  },
});

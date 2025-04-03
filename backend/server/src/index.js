import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { FoodModel } from "./models/food.schema.js";

import { usersRouter } from "./routes/user.routes.js";
import { foodRouter } from "./routes/food.routes.js";
import { orderRouter } from "./routes/order.routes.js";

dotenv.config();

const app = express();
const port = 8000;

// MongoDB холболт
mongoose
  .connect(process.env.MONGO_URI || process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log("MongoDB холбогдлоо"))
  .catch((err) => console.log("MongoDB холбогдох үед алдаа:", err));

app.use(express.json());

app.use(cors());

// Маршрутууд
app.use("/user", usersRouter);
app.use("/food", foodRouter);
app.use("/order", orderRouter);

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/food", async (req, res) => {
  try {
    const foods = await FoodModel.find(); // MongoDB-оос бүх хоолны мэдээллийг авах
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Сервер http://localhost:${port} порт дээр ажиллаж байна`);
});

// Index => server create => server start => router => api => controller => model => dataBase
//                                                                                <=

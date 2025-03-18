import express from "express";
import { getAllFoods, getFoodById, createFood, updateFood, deleteFood } from "../controllers/food.controller.js";

const router = express.Router();

router.get("/", getAllFoods);
router.get("/:foodId", getFoodById);
router.post("/", createFood);
router.patch("/:foodId", updateFood);
router.delete("/:foodId", deleteFood);

export default router;
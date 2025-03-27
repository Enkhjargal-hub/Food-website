import { Router } from "express";
import { get } from "mongoose";
import { getFood } from "../controllers/food/get-food.js";

const orderRouter= Router();

foodRouter.get("/:foodId", getFood);
// router.post("/", createFood);
// router.patch("/:foodId", updateFood);


export default {foodRouter};
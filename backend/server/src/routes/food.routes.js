import { Router } from "express";
import { get } from "mongoose";
import { getFood } from "../controllers/food/get-food.js";
// import { createFood } from "../controllers/food/create-food.js";
// import {updateFood} from "../controllers/food/update-food.js"

const foodRouter= Router();

foodRouter.get("/:foodId", getFood);
// foodRouter.post("/", createFood);
// foodRouter.patch("/:foodId", updateFood);


export default {foodRouter};
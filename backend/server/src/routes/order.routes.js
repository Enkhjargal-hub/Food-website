import {Router} from "express";
import { get } from "mongoose";
import {getOrder} from "../controllers/order/get-order.js";
import {createOrder} from "../controllers/order/create-order.js";

const orderRouter = Router();

orderRouter.get("/:id", getOrder);
orderRouter.post("/", createOrder);

export { orderRouter };

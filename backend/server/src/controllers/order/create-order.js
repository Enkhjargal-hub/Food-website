import { OrderModel } from "../../models/order.schema.js";

export const createOrder = async (req, res) => {
    const newOrder = await OrderModel.create(req.body);

    res.json({message: "order created successfully!", order: newOrder});
};
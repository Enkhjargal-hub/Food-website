import { OrderModel } from "../../models/order.schema.js";

export const getOrderById = async (req, res) => {
    const order = await OrderModel.findById(req.params.id).populate("user");

    res.json({order});
};
import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const foodOrderItemSchema = new Schema(
    {
        food: { type: Schema.Types.ObjectId, ref: "foods" },
        quantity: { type: Number, required: true },
    },
    { _id: false }
);

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    foodOrderItem: { type: [foodOrderItemSchema], required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const OrderModel = models.Orders || model("Orders", orderSchema);
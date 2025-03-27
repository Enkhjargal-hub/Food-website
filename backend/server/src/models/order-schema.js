import { Schema, model } from "mongoose";
import {foodOrderItemSchema} from "./foodorderitem.schema.js";

const OrderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    foodOrderItems: {
      type: [foodOrderItemSchema],
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "canceled", "delivered"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export const OrderModel = model("Order", OrderSchema); 
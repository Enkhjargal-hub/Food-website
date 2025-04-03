import { Schema, model } from "mongoose";

const foodSchema = new Schema(
  {
    name: { type: String, required: true }, // Хоолны нэр
    price: { type: Number, required: true }, // Хоолны үнэ
    imageUrl: { type: String, required: true }, // Хоолны зураг
    description: { type: String, required: true }, // Хоолны тайлбар
  },
  {
    timestamps: true,
  }
);

export const FoodModel = model("Foods", foodSchema);

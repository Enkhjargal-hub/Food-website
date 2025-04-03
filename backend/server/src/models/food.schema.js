import { Schema, model } from "mongoose";

const foodSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    ingredients: { type: String },
    // category: {type: Schema.Types.ObjectId, req: "Category", required: true},
  },
  {
    timestamps: true,
  }
);

export const FoodModel = model("Foods", foodSchema);

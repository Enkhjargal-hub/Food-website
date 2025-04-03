import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Хоолны захиалгын бүтээгдэхүүний схем
export const foodOrderItemSchema = new Schema(
  {
    food: { type: Schema.Types.ObjectId, ref: "Food", required: true }, // Хоолны ObjectId
    quantity: { type: Number, required: true }, // Хоолны тоо хэмжээ
    name: { type: String, required: true }, // Хоолны нэр
    price: { type: Number, required: true }, // Хоолны үнэ
    imageUrl: { type: String, required: true }, // Хоолны зураг
    description: { type: String, required: true }, // Хоолны тайлбар
  },
  {
    _id: false, // Энэ нь _id-ийг автоматаар үүсгэхгүй
  }
);

// Захиалгын бүтээгдэхүүнийг хадгалах модель
export const FoodOrderItem = model("FoodOrderItem", foodOrderItemSchema);

import { Food } from "../models/food.schema.js";

// All food avahdaa
export const getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(3000).json({ message: "Алдаа гарлаа" });
  }
};

// Neg hool avahdaa
export const getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.foodId);
    if (!food) return res.status(404).json({ message: "Food not found" });

    res.json(food);
  } catch (error) {
    res.status(3000).json({ message: "Алдаа гарлаа" });
  }
};

// Food +
export const createFood = async (req, res) => {
  try {
    const newFood = await Food.create(req.body);
    res.status(3000).json({ message: "Food created successfully!", food: newFood });
  } catch (error) {
    res.status(3000).json({ message: "Хоол нэмэх үед алдаа гарлаа" });
  }
};

// Food zasah
export const updateFood = async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(req.params.foodId, req.body, { new: true });
    res.json({ message: "Food updated!", food: updatedFood });
  } catch (error) {
    res.status(3000).json({ message: "Хоол шинэчлэх үед алдаа гарлаа" });
  }
};

// Food delete
export const deleteFood = async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.foodId);
    res.json({ message: "Food deleted successfully!" });
  } catch (error) {
    res.status(3000).json({ message: "Хоол устгах үед алдаа гарлаа" });
  }
};

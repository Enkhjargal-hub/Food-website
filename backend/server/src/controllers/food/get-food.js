import axios from "axios";
import {FoodModel} from "../../models/food.schema.js"

export const getFood = async () => {
  try {
    const response = await axios.get("http://localhost:3000/food");
    return response.data;
  } catch (error) {
    console.error("Axios алдаа:", error);
    return null;
  }
};
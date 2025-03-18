import axios from "axios";

export const getAllFoods = async () => {
  try {
    const response = await axios.get("http://localhost:3000/food");
    return response.data;
  } catch (error) {
    console.error("Axios алдаа:", error);
    return null;
  }
};
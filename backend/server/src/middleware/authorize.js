import jwt from "jsonwebtoken";
import { UserModel } from "../models/user-schema.js"; 
import dotenv from "dotenv";

dotenv.config(); 

const TOKEN_SECRET = process.env.TOKEN_SECRET; 

export const authorize = async (req, res, next) => {
  try {
    // Authorization header-ээс токен авах
    const token = req.headers.authorization?.split(" ")[1]; 

    // Токен байхгүй бол Unauthorized хариу буцаах
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    // JWT-ийн токеныг баталгаажуулах
    const decoded = jwt.verify(token, TOKEN_SECRET); 

    // Хэрэглэгчийг олж авах
    req.user = await UserModel.findById(decoded.userId); 

    // Хэрэглэгчийг олохгүй бол Unauthorized хариу буцаах
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    // Хэрэглэгчийн мэдээллийг req.user-д хадгалаад, дараагийн алхам руу шилжих
    next(); 
  } catch (err) {
    // Алдааг барьж, хэрэглэгчид хариу буцаах
    res.status(500).json({
      message: "Server error",
      error: err.message
    });
  }
};

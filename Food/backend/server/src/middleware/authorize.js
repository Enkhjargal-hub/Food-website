import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../../config/env.js";
import User from "../models/user-schema.js";

export const authorize = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Token shuud avna

    if (!token) return res.status(401).json({ message: "Unauthorized" }); 

    const decoded = jwt.verify(token, TOKEN_SECRET);
    req.user = await User.findById(decoded.userId);

    if (!req.user) return res.status(401).json({ message: "Unauthorized" }); 

    next();
  } catch (err) {
    res.status(500).json({ 
      message: "Server error",
      error: err.message
    });
  }
};
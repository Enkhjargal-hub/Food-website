import { UserModel } from "../../models/user.schema.js";

export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const newUser = await UserModel.create({ email, password });

    res.json({ message: "User created successfully!", user: newUser });
  } catch (error) {
    console.error("User үүсгэх үед алдаа гарлаа:", error);
    res.status(3000).json({ message: "User үүсгэхэд алдаа гарлаа" });
  }
};

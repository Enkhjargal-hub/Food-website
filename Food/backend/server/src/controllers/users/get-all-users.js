import { UserModel } from "../../models/user.schema.js";

export const getAllUsers = async (req, res) => {
  const allUsers = await UserModel.find();
  res.json({ message: "Hello, User!", users: allUsers });
};

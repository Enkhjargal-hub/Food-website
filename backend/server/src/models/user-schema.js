import { Schema, model } from "mongoose";

const userShema = new Schema(
  {
    id: { type: Schema.Types.ObjectId },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    address: { type: String },
    role: {
      type: String,
      email: ["ADMIN", "USER"],
      default: "USER",
    },
    orderedFoods: { type: [Schema.Types.ObjectId], ref: "Orders" },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model.Users || model("Users", userShema);
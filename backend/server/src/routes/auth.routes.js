import { Router } from "express";
import { signUp } from "../resolvers/auth/authSignUp.js";
import { signIn } from "../resolvers/auth/authSignIn.js";

const authRouter = Router();

authRouter
  .post("/sign-up", signUp)   
  .post("/sign-in", signIn)   
  .post("/sign-out", (req, res) => res.json({ title: "Sign out" }));

export default authRouter;
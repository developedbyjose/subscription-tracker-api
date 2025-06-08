import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "Get all users" });
});

userRouter.get("/:id", (req, res) => {
  res.send({ title: "Get user ID" });
});

userRouter.post("/", (req, res) => {
  res.send({ title: "Create new user" });
});

export default userRouter;

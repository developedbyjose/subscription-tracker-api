import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "Get all Subscription details" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "Get subscription details" });
});

subscriptionRouter.post("/", (req, res) => {
  res.send({ title: "Subscription Page" });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "update subscription details" });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "delete subscription details" });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "Get all user subscriptions" });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "Cancel user Subscriptions" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "Get all upcoming renewals" });
});

export default subscriptionRouter;

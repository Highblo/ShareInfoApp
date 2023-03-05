import express from "express";
import Thread from "../models/thread.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  const threads = await Thread.find().sort({ updatedAt: -1 });
  res.json(threads);
});

router.post("/", async (req, res) => {
  const thread = new Thread(req.body);
  const newThread = await thread.save();
  res.json(newThread);
})

export default router;
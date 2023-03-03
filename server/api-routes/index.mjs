import express from "express";
import Thread from "../models/thread.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  const threads = await Thread.find();
  console.log(threads);
})

export default router;
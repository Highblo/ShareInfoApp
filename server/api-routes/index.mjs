import express from "express";
import { body } from "express-validator";

import { getAllThreads, registThread, getThread } from "../controllers/threads.mjs";

const router = express.Router();

router.get("/", getAllThreads);

router.get("/:id", getThread);

router.post(
  "/",
  body("title").notEmpty(),
  body("description").notEmpty(),
  registThread
);

export default router;

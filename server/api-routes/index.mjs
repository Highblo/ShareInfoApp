import express from "express";
import { body } from "express-validator";

import {
  getAllThreads,
  registThread,
  getThread,
  deleteThread,
  updateThread,
} from "../controllers/threads.mjs";

const router = express.Router();

router.get("/", getAllThreads);

router.get("/:id", getThread);

router.post(
  "/",
  body("title").notEmpty(),
  body("description").notEmpty(),
  registThread
);

router.delete("/:id", deleteThread);

router.patch(
  "/:id",
  body("title").optional().notEmpty(),
  body("description").optional().notEmpty(),
  updateThread
);

export default router;

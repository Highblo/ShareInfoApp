import { validationResult } from "express-validator";

import Thread from "../models/thread.mjs";

const getAllThreads = async (req, res) => {
  const threads = await Thread.find().sort({ updatedAt: -1 });
  res.json(threads);
};

const getThread = async (req, res) => {
  const id = req.params.id;
  const thread = await Thread.findById(id);
  res.json(thread);
};

const registThread = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errs = errors.array();
    return res.status(400).json(errs);
  }

  const thread = new Thread(req.body);
  const newThread = await thread.save();
  res.status(201).json(newThread);
};

export { getAllThreads, registThread, getThread };

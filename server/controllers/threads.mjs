import { validationResult } from "express-validator";

import Thread from "../models/thread.mjs";

const getAllThreads = async (req, res) => {
  const threads = await Thread.find().sort({ updatedAt: -1 });
  res.json(threads);
};

const getThread = async (req, res) => {
  try {
    const id = req.params.id;
    const thread = await Thread.findById(id);
    if (thread === null) {
      return res.status(404).json({ msg: "そんなidないで" });
    }
    res.json(thread);
  } catch (err) {
    res.status(500).json({ msg: "不正なエラーやで" });
  }
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

const deleteThread = async (req, res) => {
  try {
    const id = req.params.id;
    const { deletedCount } = await Thread.deleteOne({ _id: id });
    if (deletedCount === 0) {
      return res.status(404).json({ msg: "そんなidないで" });
    }
    res.json({ msg: "Delete succeeded" });
  } catch (err) {
    res.status(500).json({ msg: "不正なエラーやで" });
  }
};

const updateThread = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errs = errors.array();
      return res.status(400).json(errs);
    }

    const id = req.params.id;
    const thread = await Thread.findById(id);
    if (thread === null) return res.status(404).json({ msg: "そんなidないで" });

    const { title, description } = req.body;
    if (title !== undefined) thread.title = title;
    if (description !== undefined) thread.description = description;
    await thread.save();
    res.json(thread);
  } catch (err) {
    res.status(500).json({ msg: "不正なエラーやで" });
  }
};

export { getAllThreads, registThread, getThread, deleteThread, updateThread };

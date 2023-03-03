import { model, Schema } from "mongoose";

const threadSchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Thread = model("Thread", threadSchema);

export default Thread;
import mongoose from "mongoose";

const chatModel = new mongoose.Schema(
  {
    chatName: {
      type: String,
      required: true,
    },
    isGroup: {
      type: Boolean,
      required: true,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    lastMessege: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "messege",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

export const chat = mongoose.model("chat", chatModel);

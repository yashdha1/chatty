import mongoose from "mongoose";

const messegeModel = new mongoose.Schema({
    sender : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    receiver : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    chatContent : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "chat",
    },
}, { timestamps: true });

export const messege = mongoose.model("messege", messegeModel);

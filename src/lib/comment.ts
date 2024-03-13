import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        data: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

// check like here the ? is important
const Comment =
    mongoose?.models?.Comment || mongoose.model("Comment", commentSchema);

export default Comment;

import mongoose from "mongoose";

const taskModel = mongoose.Schema({
    taskName: {
        type: String,
        required: true,
    },
    due_date: {
        type: String,
        required: true,
    }
});

const Task = mongoose.model("Task", taskModel);
export default Task;
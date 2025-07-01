import mongoose from "mongoose";

// Define the project schema
const projectSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgAlt: {
        type: String,
        required: false,
        default: "project-image"
    }
});

// Use a conditional check to avoid overwriting the model
export const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);



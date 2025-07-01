import mongoose from "mongoose";

// Define the client schema
const clientSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
});

// Use a conditional check to avoid overwriting the model
export const Client = mongoose.models.Client || mongoose.model("Client", clientSchema);



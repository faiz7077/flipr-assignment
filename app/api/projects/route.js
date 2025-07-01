import mongoose from "mongoose";
import { Project } from "@/schema/Project"; // Ensure this is the correct path and the schema is exported
import { NextRequest } from "next/server";

export async function GET(req) {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const projects = await Project.find();
        return new Response(JSON.stringify(projects), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function POST(req) {
    try {
        const data = await req.json();
        console.log(data);
        await mongoose.connect(process.env.MONGODB_URI);
        
        const ex = {
            img: "/assets/images/projects/one.svg",
            title: "Project",
            description: "This is a project",
        };
        
        const project = new Project(data);
        await project.save();

        return new Response(JSON.stringify(project), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

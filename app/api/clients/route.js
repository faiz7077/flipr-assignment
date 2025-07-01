// src/app/api/clients/route.js

import mongoose from "mongoose";
import { Client } from "@/schema/Client"; // Ensure this is the correct path and the schema is exported
import { NextRequest } from "next/server";

export async function GET(req) {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const clients = await Client.find();
        return new Response(JSON.stringify(clients), {
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
        console.log(data); // Log the incoming data for debugging
        await mongoose.connect(process.env.MONGODB_URI);

        const ex= {
            img: "/assets/images/clients/one.svg",
            name: "Client",
            description: "This is a client",
            designation: "CEO",
        }

        // Create a new client instance using the incoming data
        const client = new Client(data);
        await client.save();
        console.log(client)

        return new Response(JSON.stringify(client), {
            status: 201, // Use 201 for created resources
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

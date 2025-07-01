import mongoose from "mongoose";
import { Subscriber } from "@/schema/Subscriber";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const data = await Subscriber.find();
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const data = await req.json();
        const ex = {
            "email": "adityajoshi304@gmail.com"
        }
        const subscriber = new Subscriber(ex);
        subscriber.save();
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}
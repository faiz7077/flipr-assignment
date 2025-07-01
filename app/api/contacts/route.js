import mongoose from "mongoose";
import { Contact } from "@/schema/Contact";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const data = await Contact.find();
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const ex = {
            name: "aa",
            email: "aaa@gmail.com",
            mobile: "aaaa",
            city: "aaaa"
        };
        const data = await req.json();
        console.log("Hwllo World")
        console.log(data)
        const contact = new Contact(data);
        await contact.save();
        console.log(contact);
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}

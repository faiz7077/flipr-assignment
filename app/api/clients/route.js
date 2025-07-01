
// import mongoose from "mongoose";
// import { Client } from "@/schema/Client"; // ✅ Make sure schema is correct

// let isConnected = false;
// async function connectMongo() {
//   if (isConnected) return;
//   await mongoose.connect(process.env.MONGODB_URI);
//   isConnected = true;
// }

// const corsHeaders = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
//   "Access-Control-Allow-Headers": "Content-Type",
//   "Content-Type": "application/json",
// };

// // ✅ Handle preflight CORS requests
// export async function OPTIONS() {
//   return new Response(null, {
//     status: 204,
//     headers: corsHeaders,
//   });
// }

// export async function GET(req) {
//   try {
//     await connectMongo();
//     const clients = await Client.find();
//     return new Response(JSON.stringify(clients), {
//       status: 200,
//       headers: corsHeaders,
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: corsHeaders,
//     });
//   }
// }

// export async function POST(req) {
//   try {
//     const data = await req.json();
//     await connectMongo();

//     const client = new Client(data);
//     await client.save();

//     return new Response(JSON.stringify(client), {
//       status: 201,
//       headers: corsHeaders,
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: corsHeaders,
//     });
//   }
// }
import mongoose from "mongoose";
import { Client } from "@/schema/Client"; // ✅ Ensure schema path is valid

let isConnected = false;
async function connectMongo() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  isConnected = true;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // OR set to "http://localhost:3000" for dev
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400", // Cache preflight response (optional)
  "Content-Type": "application/json",
};

// ✅ OPTIONS — Required for preflight CORS check
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

// ✅ GET — Fetch all clients
export async function GET() {
  try {
    await connectMongo();
    const clients = await Client.find();

    return new Response(JSON.stringify(clients), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message || "Failed to fetch clients" }),
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
}

// ✅ POST — Add a new client
export async function POST(req) {
  try {
    const data = await req.json();
    await connectMongo();

    const client = new Client(data);
    await client.save();

    return new Response(JSON.stringify(client), {
      status: 201,
      headers: corsHeaders,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message || "Failed to create client" }),
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
}

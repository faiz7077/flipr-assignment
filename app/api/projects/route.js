  
// import mongoose from "mongoose";
// import { Project } from "@/schema/Project";

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

// export async function OPTIONS() {
//   return new Response(null, {
//     status: 204,
//     headers: corsHeaders,
//   });
// }

// export async function GET(req) {
//   try {
//     await connectMongo();
//     const projects = await Project.find();

//     return new Response(JSON.stringify(projects), {
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

//     const project = new Project(data);
//     await project.save();

//     return new Response(JSON.stringify(project), {
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
import mongoose from "mongoose";
import { Project } from "@/schema/Project"; // ✅ Ensure this path is correct

let isConnected = false;
async function connectMongo() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  isConnected = true;
}

// ✅ Reusable CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // OR "http://localhost:3000" for dev
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400", // Cache preflight
  "Content-Type": "application/json",
};

// ✅ Handle CORS Preflight
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

// ✅ GET /api/projects
export async function GET() {
  try {
    await connectMongo();
    const projects = await Project.find();

    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || "Error fetching projects" }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}

// ✅ POST /api/projects
export async function POST(req) {
  try {
    const data = await req.json();
    await connectMongo();

    const project = new Project(data);
    await project.save();

    return new Response(JSON.stringify(project), {
      status: 201, // ✅ 201 for resource creation
      headers: corsHeaders,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || "Error creating project" }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}


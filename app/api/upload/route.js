/// src/app/api/upload/route.js
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get('file');
  
  if (!file || !(file instanceof Blob)) {
    return NextResponse.json({ error: 'No file provided or invalid file type.' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const uploadDir = path.join(process.cwd(), 'public', 'storage');

  // Ensure the upload directory exists
  await fs.mkdir(uploadDir, { recursive: true });

  // Get the current list of files in the upload directory
  const existingFiles = await fs.readdir(uploadDir);
  
  // Determine the next index for naming
  let nextIndex = existingFiles.length; // Start with the current count of files

  // Get the file extension from the uploaded file
  const fileExtension = path.extname(file.name); // Get the extension (e.g., .jpg, .png)

  // Construct the new file name using the index and original extension
  const newFileName = `${nextIndex}${fileExtension}`;
  const filePath = path.join(uploadDir, newFileName);

  try {
    await fs.writeFile(filePath, buffer);
    return NextResponse.json({ message: 'File uploaded successfully', url: `/storage/${newFileName}` }, { status: 201 });
  } catch (error) {
    console.error('Error writing file:', error);
    return NextResponse.json({ error: 'Failed to save file.' }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, company, projectType, message } = data;

    // Save in /data/contacts.csv (NOT public)
    const filePath = path.join(process.cwd(), "data", "clients_projects.csv");

    // Create folder if not exists
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    // Add header if file does not exist
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(
        filePath,
        "Date,Time,Name,Email,Company,Project Type,Message\n"
      );
    }

    // Current Date & Time
    const now = new Date();
    const date = now.toLocaleDateString("en-GB");
    const time = now.toLocaleTimeString("en-GB");

    // Append new row
    const row = `"${date}","${time}","${name}","${email}","${company}","${projectType}","${message}"\n`;
    fs.appendFileSync(filePath, row);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to save data" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const SIGNUPS_FILE = path.join(process.cwd(), "data", "signups.json");

export async function POST(request: Request) {
  const { email } = await request.json();

  if (typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  let signups: { email: string; createdAt: string }[] = [];
  try {
    signups = JSON.parse(await fs.readFile(SIGNUPS_FILE, "utf-8"));
  } catch {
    signups = [];
  }

  signups.push({ email, createdAt: new Date().toISOString() });
  await fs.mkdir(path.dirname(SIGNUPS_FILE), { recursive: true });
  await fs.writeFile(SIGNUPS_FILE, JSON.stringify(signups, null, 2));

  return NextResponse.json({ ok: true });
}

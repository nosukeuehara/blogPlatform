import { db } from "@/db/db";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await db.post.findMany();
  return NextResponse.json(res);
}

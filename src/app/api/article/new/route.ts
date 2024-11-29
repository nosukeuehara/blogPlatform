import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';
export async function GET() {
  const articleId = randomUUID()
  return NextResponse.json(articleId)
}
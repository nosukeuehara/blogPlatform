import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';

export async function POST() {
  const articleId = randomUUID()
  return NextResponse.json({
    'slug': articleId
  })
}
import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
  const res = request.body
  console.log(res)
  return NextResponse.json({ statusText: 'OK' })
}
import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
  try {
    const res = await request.json();
    console.log(res);

    return NextResponse.json({ status: 204, statusText: 'success' });
  } catch (error) {
    console.error('Error:', error);

    return NextResponse.json(
      { status: 409, statusText: 'Error', message: 'Invalid request data' }
    );
  }
}

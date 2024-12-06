import { db } from '@/db/db';
import { ArticleData } from '@/types/types';
import { NextResponse } from 'next/server';

export async function PUT(request: ArticleRequest) {
  try {
    const res: ArticleData = await request.json();

    await db.post.create({
      data: {
        title: res.title,
        content: res.content,
        published: res.published,
      },
    });


    return NextResponse.json({ status: 204, statusText: 'Success' });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: 500, statusText: 'Server Error', message: error.message },
        { status: 500 }
      );
    }

  }
}

interface ArticleRequest extends Request {
  title: string,
  content: string,
  published: boolean
}
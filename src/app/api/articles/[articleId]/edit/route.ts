import { db } from "@/db/db";
import { Post } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { articleId: string } }) {
  const { articleId } = params;
  try {
    const article: Post | null = await db.post.findUnique({
      where: {
        id: articleId,
      },
    });
    if (article === null) {
      return NextResponse.json({ id: articleId, title: "", content: "", published: false });
    }

    return NextResponse.json(article);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching article:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}

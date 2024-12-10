import { db } from "@/db/db";
import { NextResponse } from "next/server";


export async function GET(request: Request, { params }: { params: { articleId: string } }) {
  const { articleId } = params;
  console.log('記事のID', articleId)

  try {
    const article = await db.post.findUnique({
      where: {
        id: articleId,
      },
    });

    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    console.log('記事API側', article)
    return NextResponse.json(article);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}

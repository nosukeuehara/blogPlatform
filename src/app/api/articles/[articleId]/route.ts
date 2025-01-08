import { db } from '@/db/db';
import { ArticleData } from '@/types/types';
import { NextResponse } from 'next/server';

export async function PUT(request: ArticleRequest) {
  try {
    const res: ArticleData = await request.json();

    const isExisted = await db.post.findUnique({
      where: {
        id: res.id
      }
    })

    if (isExisted) {
      await db.post.update({
        where: {
          id: res.id
        },
        data: {
          title: res.title,
          content: res.content,
          published: res.published,
        }
      });
    } else {
      await db.post.create({
        data: {
          id: res.id,
          title: res.title,
          content: res.content,
          published: res.published,
        }
      });
    }

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

export async function DELETE(targetData: Targetrequest) {
  const targetId = await targetData.json().then(res => res.id)
  try {
    await db.post.delete({
      where: {
        "id": targetId
      }
    })
    return NextResponse.json({ status: 204, statusText: 'Success' });
  } catch (error) {
    throw new Error(`can not delete article[id:${targetId}]. message: ${error}`)
  }
}

interface ArticleRequest extends Request {
  id: string,
  title: string,
  content: string,
  published: boolean
}

interface Targetrequest extends Request {
  targetId: string
}
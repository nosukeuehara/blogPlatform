import { redirect } from "next/navigation";

// 記事新規作成
export const generateNewArticle = async () => {
  const { slug } = await fetch("/api/article/new", {
    method: 'POST'
  }).then(res => res.json())

  redirect(`/articles/${slug}/edit`);
};

export const saveArticle = async (articleData: string) => {
  try {
    const res = await fetch("/api/article/save", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', // Content-Typeを適切な値に変更
      },
      body: JSON.stringify({ article: articleData }), // データをリクエストのボディとして送信
    });

    if (!res.ok) {
      throw new Error(`Failed to save article: ${res.statusText}`);
    }

    return await res.json(); // サーバーからのレスポンスを返す
  } catch (error) {
    console.error('Error saving article:', error);
    throw new Error('An error occurred while saving the article.');
  }
};

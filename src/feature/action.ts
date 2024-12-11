import { ArticleData } from "@/types/types";

const BASE_URL =
  typeof window === "undefined"
    ? process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000" // サーバー側でのベースURL
    : ""; // クライアントサイドでは相対URLをそのまま使う

// 記事新規作成
export const generateNewArticle = async () => {
  const { slug } = await fetch(`${BASE_URL}/api/article/new`, {
    method: "POST",
  }).then((res) => res.json());
  return slug;
};

// TODO: 記事取得時にデフォルトのフォーマットを返すようにする
// サーバー側の実装の修正
export const getArticle = async (articleId: string) => {
  const article = await fetch(`${BASE_URL}/api/articles/${articleId}/edit`, {
    method: "GET",
  })
  return article
}

export const saveArticle = async (articleData: ArticleData) => {
  try {
    const res = await fetch(`${BASE_URL}/api/article/save`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: articleData.id,
        title: articleData.title,
        content: articleData.content,
        published: articleData.published
      }),
    });

    if (!res.ok) {
      throw new Error(`Failed to save article: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error saving article:", error);
    throw new Error("An error occurred while saving the article.");
  }
};

export const getAllArticles = async () => {
  const articles: ArticleData[] = await fetch(`${BASE_URL}/api/dashboard`).then(
    (res) => res.json()
  );
  return articles;
};

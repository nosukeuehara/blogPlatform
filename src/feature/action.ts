import { ArticleData } from "@/types/types";

const BASE_URL =
  typeof window === "undefined"
    ? process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000" // サーバー側でのベースURL
    : ""; // クライアントサイドでは相対URLをそのまま使う

// 記事新規作成
export const generateNewArticle = async () => {
  const { slug } = await fetch(`${BASE_URL}/api/articles`, {
    method: "POST",
  }).then((res) => res.json());
  return slug;
};

export const getArticle = async (articleId: string) => {
  const article = await fetch(`${BASE_URL}/api/articles/${articleId}/edit`, {
    cache: "no-cache",
    method: "GET",
  })
  return article
}

// 記事を編集した際に最新の記事のデータが取得できないのでキャッシュ回りの改善必須
export const saveArticle = async (articleData: ArticleData) => {
  try {
    const res = await fetch(`${BASE_URL}/api/articles/${articleData.id}`, {
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
  const articles: ArticleData[] = await fetch(`${BASE_URL}/api/dashboard`, {
    cache: "no-store"
  }).then(
    (res) => res.json()
  );
  return articles;
};

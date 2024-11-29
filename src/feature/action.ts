// ServerAction

import { redirect } from "next/navigation";

// 記事新規作成
export const generateNewArticle = async () => {
  const articleId = await fetch("/api/article/new").then((res) => res.json());
  redirect(`/articles/${articleId}/edit`);
};
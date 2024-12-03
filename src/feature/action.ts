import { redirect } from "next/navigation";

// 記事新規作成
export const generateNewArticle = async () => {
  const { slug } = await fetch("/api/article/new", {
    method: 'POST'
  }).then(res => res.json())

  redirect(`/articles/${slug}/edit`);
};
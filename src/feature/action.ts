import { ArticleData } from "@/types/types";

// 記事新規作成
export const generateNewArticle = async () => {
  const { slug } = await fetch("/api/article/new", {
    method: 'POST'
  }).then(res => res.json())
  return slug
};

export const saveArticle = async (articleData: ArticleData) => {
  try {
    const res = await fetch("/api/article/save", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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
    console.error('Error saving article:', error);
    throw new Error('An error occurred while saving the article.');
  }
};

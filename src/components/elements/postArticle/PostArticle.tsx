"use client";
import { generateNewArticle } from "@/feature/action";
import styles from "./postArticle.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PostArticle = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <button
      onClick={async () => {
        setIsLoading(true); // ローディング状態に設定
        try {
          const slug = await generateNewArticle();
          router.push(`/articles/${slug}/edit`);
        } catch (error) {
          console.error("記事の作成中にエラーが発生しました:", error);
        }
      }}
      className={styles["bl-postBtn"]}
      disabled={isLoading} // ローディング中はボタンを無効化
    >
      {isLoading ? "作成中..." : "投稿する"}
    </button>
  );
};

export default PostArticle;

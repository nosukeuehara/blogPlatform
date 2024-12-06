"use client";
import { generateNewArticle } from "@/feature/action";
import styles from "./postArticle.module.css";
import { useRouter } from "next/navigation";

const PostArtile = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={async () => {
          const slug = await generateNewArticle();
          router.push(`/articles/${slug}/edit`);
        }}
        className={`${styles.newPostBtn}`}
      >
        投稿する
      </button>
    </div>
  );
};

export default PostArtile;

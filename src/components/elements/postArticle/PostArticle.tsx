"use client";
import { generateNewArticle } from "@/feature/action";
import styles from "./postArticle.module.css";

const PostArtile = () => {
  return (
    <div>
      <button
        onClick={async () => {
          generateNewArticle();
        }}
        className={`${styles.newPostBtn}`}
      >
        投稿する
      </button>
    </div>
  );
};

export default PostArtile;

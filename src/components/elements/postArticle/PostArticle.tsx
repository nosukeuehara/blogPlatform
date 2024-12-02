"use client";
import { generateNewArticle } from "@/feature/action";

const PostArtile = () => {
  return (
    <div>
      <form action={generateNewArticle}>
        <button type={"submit"}>投稿する</button>
      </form>
    </div>
  );
};

export default PostArtile;

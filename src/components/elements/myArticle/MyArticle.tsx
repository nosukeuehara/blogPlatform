import { ArticleData } from "@/types/types";
import Link from "next/link";
import React from "react";
import styles from "./myArticle.module.css";

const MyArticle = ({ props }: { props: ArticleData[] }) => {
  return (
    <div>
      {props.map((article) => {
        return (
          <article key={article.id} className={styles.myArticleCard}>
            <Link href={`/articles/${article.id}/edit`}>
              <div>{article.title}</div>
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default MyArticle;

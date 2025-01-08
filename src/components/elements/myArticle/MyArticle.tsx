import { ArticleData } from "@/types/types";
import Link from "next/link";
import React from "react";
import styles from "./myArticle.module.css";
import PopoverButtonSet from "../popoverButtonSet/PopoverButtonSet";

const MyArticle = ({ props }: { props: ArticleData[] }) => {
  return (
    <div>
      {props.map((article) => {
        return (
          <article key={article.id} className={styles.block_myArticleCard}>
            <Link href={`/articles/${article.id}/edit`}>
              <div>{article.title}</div>
            </Link>
            <PopoverButtonSet articleId={article.id} />
          </article>
        );
      })}
    </div>
  );
};

export default MyArticle;

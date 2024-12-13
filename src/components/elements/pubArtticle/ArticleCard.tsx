import React from "react";
import { ArticleData } from "@/types/types";
import Link from "next/link";

const AarticleCard = ({ article }: { article: ArticleData }) => {
  return (
    // 記事を表示するためのページへのリンク
    //　TODO : ページの作成
    <Link href={``}>
      <div>{article.title}</div>
    </Link>
  );
};

export default AarticleCard;

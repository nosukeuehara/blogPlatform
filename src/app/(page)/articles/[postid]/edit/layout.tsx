import EditorHeader from "@/components/layouts/EditorHeader/EditorHeader";
import { DocProvider, UpdateProvider } from "@/provider/provider";
import React, { Suspense } from "react";
import styles from "./page.module.css";
import commonStyles from "../../../../common.module.css";
import { getArticle } from "@/feature/action";
import { ArticleDoc } from "@/types/types";

const fetchArticleById = async (postid: string): Promise<ArticleDoc> => {
  const response: ArticleDoc = await getArticle(postid).then((res) =>
    res.json()
  );
  if (!response) {
    throw new Error("記事の取得に失敗しました");
  }
  return response;
};

const Layout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { postid: string };
}>) => {
  const postId = (await params).postid;
  const article: ArticleDoc = await fetchArticleById(postId);
  return (
    <div className={commonStyles.contentWidth}>
      <UpdateProvider>
        <DocProvider defaulteArticle={article}>
          <header className={styles.editHeader}>
            <EditorHeader postid={params.postid} />
          </header>
          <Suspense>{children}</Suspense>
        </DocProvider>
      </UpdateProvider>
    </div>
  );
};

export default Layout;

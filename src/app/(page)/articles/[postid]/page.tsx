import { getArticle } from "@/feature/action";
import { md } from "@/markdown-it/md";
import React from "react";

type Param = {
  postid: string;
};

const page = async ({ params }: { params: Promise<Param> }) => {
  const postId = (await params).postid;
  const articleData = await getArticle(postId).then((res) => res.json());
  const htmlContent = md.render(articleData.content);
  return (
    <div>
      <h3>{articleData.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default page;

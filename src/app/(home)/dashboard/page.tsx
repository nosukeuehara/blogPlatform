import MyArticle from "@/components/elements/myArticle/MyArticle";
import { getAllArticles } from "@/feature/action";
import { ArticleData } from "@/types/types";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const page = async () => {
  const articles: ArticleData[] = await getAllArticles();
  return (
    <div>
      <MyArticle props={articles} />
    </div>
  );
};
export default page;

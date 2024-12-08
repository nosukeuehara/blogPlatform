import { getAllArticles } from "@/feature/action";
import { ArticleData } from "@/types/types";
import Link from "next/link";

const page = async () => {
  const articles: ArticleData[] = await getAllArticles()
  console.log(articles)

  return (
    <div>
      {articles.map(a => {
        return (
          <Link href={`/articles/${a.id}/edit`} key={a.title}>
            <div className="title">{a.title}</div>
            <div className="content">{a.content}</div>
          </Link>
        )
      })}
    </div>
  )
};
export default page;

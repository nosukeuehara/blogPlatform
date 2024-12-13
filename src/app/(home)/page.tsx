import AarticleCard from "@/components/elements/pubArtticle/ArticleCard";
import { getAllArticles } from "@/feature/action";
import { ArticleData } from "@/types/types";

export default async function Home() {
  const articles: ArticleData[] = await getAllArticles();
  return (
    <div>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <AarticleCard article={article} />
          </div>
        );
      })}
    </div>
  );
}

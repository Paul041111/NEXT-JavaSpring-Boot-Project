"use client";

import useArticles from "../../hooks/useArticles";
import ArticleCard from "../../components/ArticleCard";
import Loader from "../../components/Loader";

export default function ArticlesPage() {
  const { articles, loading } = useArticles();
  const currentUser =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null;

  if (loading) return <Loader />;

  return (
    <div>
      <h1>Articles</h1>

      {articles.map((a) => (
        <ArticleCard key={a.id} article={a} />
      ))}
    </div>
  );
}
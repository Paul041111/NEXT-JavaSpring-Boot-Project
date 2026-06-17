"use client";

import { useEffect, useState } from "react";
import { getArticle } from "../../../services/articleService";
import { useSearchParams } from "next/navigation";

export default function ArticleDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (!id) return;

    async function load() {
      const data = await getArticle(id);
      setArticle(data);
    }

    load();
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}
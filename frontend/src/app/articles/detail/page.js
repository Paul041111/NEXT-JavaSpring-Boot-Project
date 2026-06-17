"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getArticles } from "../../../services/articleService";

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await getArticles();
        setArticles(data);
      } catch (error) {
        console.error("Failed to load articles:", error);
      }
    }

    loadArticles();
  }, []);

  return (
    <div>
      <h1>Articles</h1>

      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        articles.map((article, index) => (
          <div
            key={article.id || index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h2>{article.title}</h2>

            <p>{article.content}</p>

            <Link href={`/articles/detail?id=${article.id}`}>
              View Details
            </Link>

            <Link href={`/articles`}>
              Back
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
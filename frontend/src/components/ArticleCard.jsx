import Link from "next/link";

export default function ArticleCard({ article }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 10, margin: 10 }}>
      <h3>{article.title}</h3>


      <p>
        {article.content?.length > 100
          ? article.content.slice(0, 100) + "..."
          : article.content}
      </p>

      <Link
        href={`/articles/detail?title=${encodeURIComponent(article.title)}&content=${encodeURIComponent(article.content)}&content=${encodeURIComponent(article.userId)}`}
      >
        Read More
      </Link>


    </div>
  );
}
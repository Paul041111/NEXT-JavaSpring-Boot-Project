"use client";

import { useSearchParams } from "next/navigation";

export default function ArticleDetail() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const content = searchParams.get("content");

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
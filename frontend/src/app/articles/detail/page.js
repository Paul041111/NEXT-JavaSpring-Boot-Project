"use client";
import Link from "next/link";


import { useSearchParams } from "next/navigation";

export default function ArticleDetail() {
  const searchParams = useSearchParams();


  const title = searchParams.get("title");
  const content = searchParams.get("content");
  const currentUser =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null;

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>

      <Link
        href={`/articles`}>
        Back
      </Link>
      <Link
        href={`/articles/edit`}>
        Edit
      </Link>
      <Link
        href={`/articles`}>
        Delete
      </Link>

    </div>
  );
}
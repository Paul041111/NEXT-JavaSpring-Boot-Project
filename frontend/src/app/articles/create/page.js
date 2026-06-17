"use client";

import { useState } from "react";
import { createArticle } from "../../../services/articleService";
import { useRouter } from "next/navigation";

export default function CreateArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await createArticle({ title, content });
      router.push("/articles");
    } catch (err) {
      alert("Error creating article");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Article</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br />

      <button type="submit">Create</button>
    </form>
  );
}
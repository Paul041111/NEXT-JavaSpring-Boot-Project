"use client";

import { useState } from "react";

export default function EditArticlePage() {
  const [title, setTitle] = useState("Old Title");
  const [content, setContent] = useState("Old Content");

  const submit = (e) => {
    e.preventDefault();

    console.log({
      title,
      content,
    });
  };

  return (
    <form onSubmit={submit}>
      <h1>Edit Article</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">
        Update
      </button>
    </form>
  );
}
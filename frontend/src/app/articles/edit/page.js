"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function EditPage() {
  const router = useRouter();

  const searchParams = useSearchParams();


  const id = searchParams.get("id");

  const [title, setTitle] = useState(searchParams.get("title"));
  const [content, setContent] = useState(searchParams.get("content"));

  async function handleUpdate(e) {
    e.preventDefault();
    const email = localStorage.getItem("email");
    const res = await fetch(`http://localhost:8080/articles/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "email": email
      },
      body: JSON.stringify({
        title,
        content
      })
    });

    if (res.ok) {
      alert("Article Edit!");
      // window.location.href = "/articles";
      router.push("/")
    } else {
      alert("Error creating article");
    }
  }
  return (
    <div>
      <h1>Edit Article</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={handleUpdate}>
        Update

      </button>
    </div>
  );
}
"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function EditPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const id = searchParams.get("id");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const email = localStorage.getItem("email");

      await fetch("http://127.0.0.1:8080/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "email": localStorage.getItem("email")
        },
        body: JSON.stringify({ title, content })
      });
      router.push("/articles");
    } catch (err) {
      console.log(err);
      // alert("Error creating article");
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
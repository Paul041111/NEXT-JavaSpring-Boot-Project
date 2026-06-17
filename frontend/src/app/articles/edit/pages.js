"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function EditPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const id = searchParams.get("id");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleUpdate = () => {
    console.log("Updated:", { id, title, content });

    // later call API here

    router.push("/articles");
  };

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
"use client";

import { useState } from "react";
import { apiPost } from "../../../lib/api"
export default function CreateArticlePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = localStorage.getItem("email");
    const res = await fetch("http://localhost:8080/articles", {
      method: "POST",
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
      alert("Article created!");
      // window.location.href = "/articles";
    } else {
      alert("Error creating article");
    }
  };

  return (
    <div>
      <h2>Create Article</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
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

    </div>
  );
}
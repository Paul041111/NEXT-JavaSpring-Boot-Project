"use client";
import Link from "next/link";


import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ArticleDetail() {
  const searchParams = useSearchParams();


  const title = searchParams.get("title");
  const content = searchParams.get("content");
  const id = searchParams.get("id");

  const router = useRouter();
  const currentUser =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null;
  const goToBack = () => {
    router.push("/");
  };
  const handleEdit = () => {
    window.location.href = `/articles/edit?title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}&id=${encodeURIComponent(id)}`
  }
  const goToDelete = async () => {
    const email = localStorage.getItem("email");
    const res = await fetch(`http://localhost:8080/articles/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "email": email
      }
    });

    if (res.ok) {
      alert("Article delete!");
      router.push("/");
      // window.location.href = "/articles";
    } else {
      alert("Error creating article");
    }
  };
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>

      <button onClick={goToBack}>
        Back
      </button>

      <button onClick={handleEdit}>
        Edit
      </button>

      <button onClick={goToDelete}>
        Delete
      </button>


    </div>
  );
}
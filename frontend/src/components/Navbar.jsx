"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      const storedEmail = localStorage.getItem("email");

      setIsLoggedIn(!!token);
      setEmail(storedEmail);
    };

    checkAuth();

    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  function handleLogout() {
    localStorage.removeItem("email");
    localStorage.removeItem("token");

    setIsLoggedIn(false);
    setEmail(null);

    router.push("/");
  }

  return (
    <nav style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
      <Link href="/articles" style={{ marginRight: 10 }}>
        Articles
      </Link>

      {email && (
        <Link href="/articles/create" style={{ marginRight: 10 }}>
          Create
        </Link>
      )}

      {!email ? (
        <>
          <Link href="/login" style={{ marginRight: 10 }}>
            Login
          </Link>

          <Link href="/register">Register</Link>
        </>
      ) : (
        <>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
}
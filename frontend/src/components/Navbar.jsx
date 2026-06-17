"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkAuth();

    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");
  }

  return (
    <nav style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
      <Link href="/articles" style={{ marginRight: 10 }}>
        Articles
      </Link>

      {isLoggedIn && (
        <Link href="/articles/create" style={{ marginRight: 10 }}>
          Create
        </Link>
      )}

      {!isLoggedIn ? (
        <>
          <Link href="/login" style={{ marginRight: 10 }}>
            Login
          </Link>

          <Link href="/signup">
            Sign Up
          </Link>
        </>
      ) : (
        <button onClick={handleLogout} style={{ marginLeft: 10 }}>
          Logout
        </button>
      )}
    </nav>
  );
}
"use client";

import { useState } from "react";
import { login } from "../../services/authService";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await login({ email, password });
      alert("Login successful");
      localStorage.setItem("email", email)
      window.location.href = "/";
    } catch (err) {
      alert(err)
      alert("Login failed");
    }
  }

  return (
    <div>
      <h1>Log In</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
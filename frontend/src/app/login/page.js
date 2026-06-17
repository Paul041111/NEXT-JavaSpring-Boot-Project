"use client";

import { useState } from "react";
import { login } from "../../services/authService";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await login({
        username,
        password,
      });

      localStorage.setItem("token", res.token);

      // update navbar
      window.dispatchEvent(new Event("storage"));

      router.push("/articles");
    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />


        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
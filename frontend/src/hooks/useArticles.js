"use client";

import { useEffect, useState } from "react";
import { getArticles } from "../services/articleService";

export default function useArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const data = await getArticles();
      setArticles(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return { articles, loading, reload: load };
}
import React from "react";
import { ArticlesProvider } from "./ArticlesContext";
import { fetchData } from "utils/fetchData";
const ArticlesContext_server = async ({ children }) => {
  let articles = [];
  let error = null;

  try {
    // Use fetchData to fetch articles
    const articlesData = await fetchData(
      "/data/live-feed.json", // API endpoint
      "public/data/live-feed.json" // Static file path
    );

    // Ensure articlesData is valid
    articles = Array.isArray(articlesData.results) ? articlesData.results : [];
  } catch (e) {
    console.error("Error fetching articles in ArticlesContext_server:", e);
    error = "Failed to load articles from server.";
  }

  return (
    <ArticlesProvider initialArticles={articles} initialError={error}>
      {children}
    </ArticlesProvider>
  );
};

export default ArticlesContext_server;

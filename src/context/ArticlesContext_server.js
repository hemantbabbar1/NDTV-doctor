import React from "react";
// Import the client-side Context Provider
import { ArticlesProvider } from "./ArticlesContext";

// API base URL from environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// This function will fetch articles data on the server.
async function getArticlesData() {
  try {
    const res = await fetch(`${API_BASE_URL}/data/live-feed.json`, {
      next: { revalidate: 600 }, // Revalidate data every 10 minutes (adjust as needed)
    });

    if (!res.ok) {
      console.error(
        "Failed to fetch articles data:",
        res.status,
        res.statusText
      );
      throw new Error(
        `Failed to fetch articles data: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();
    // Assuming your articles are inside the 'results' property
    return data.results;
  } catch (e) {
    //console.error("Error in getArticlesData (server-side):", e);
    // Return an empty array or an object with an error to prevent the application from crashing
    return { articles: [], error: "Failed to load articles from server." };
  }
}

// This Server Component will fetch the articles data
// and pass it to the ArticlesProvider (a Client Component).
const ArticlesContext_server = async ({ children }) => {
  const articlesData = await getArticlesData();

  // Handle potential errors from getArticlesData
  let articles = articlesData;
  let error = null;

  if (articlesData.error) {
    articles = [];
    error = articlesData.error;
  }

  return (
    // Initialize the ArticlesProvider with the server-fetched data.
    // ArticlesProvider is a Client Component.
    <ArticlesProvider initialArticles={articles} initialError={error}>
      {children}
    </ArticlesProvider>
  );
};

export default ArticlesContext_server;

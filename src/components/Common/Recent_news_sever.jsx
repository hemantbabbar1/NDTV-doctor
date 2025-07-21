// This is a Server Component, so it doesn't have "use client"
import React from "react";
import Recent_news from "./Recent_news";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Recent_news_sever = async () => {
  let recentNews = [];
  let error = null;

  try {
    const response = await fetch(`${API_BASE_URL}/data/live-feed.json`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    recentNews = data.results || [];
  } catch (e) {
    console.error("Error fetching news data on server:", e);
    error = "Failed to load recent news. Please try again later.";
    recentNews = [];
  }

  return <Recent_news recentNews={recentNews} error={error} />;
};

export default Recent_news_sever;

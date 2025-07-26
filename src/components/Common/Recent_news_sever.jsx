// This is a Server Component, so it doesn't have "use client"
import React from "react";
import Recent_news from "./Recent_news";
import { fetchData } from "utils/fetchData";

const Recent_news_sever = async () => {
  let recentNews = [];
  let error = null;

  try {
    // Fetch data using the centralized fetchData helper function
    const data = await fetchData(
      "/data/live-feed.json", // API एन्डपॉइंट
      "public/data/live-feed.json" // स्टैटिक फाइल पाथ
    );
    recentNews = data.results || [];
  } catch (e) {
    console.error("Error fetching news data on server:", e);
    error = "Failed to load recent news. Please try again later.";
    recentNews = [];
  }

  return <Recent_news recentNews={recentNews} error={error} />;
};

export default Recent_news_sever;

import React from "react";
import Home_section6 from "./Home_section6";
import fs from "fs/promises"; // Node.js File System module
import path from "path"; // Node.js Path module

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const USE_STATIC_DATA = process.env.NEXT_PUBLIC_USE_STATIC_DATA === "true";

async function getArticles() {
  if (USE_STATIC_DATA) {
    // Build the absolute path to the JSON file
    const filePath = path.join(
      process.cwd(),
      "public",
      "data",
      "Fitness-Excericise-Top-Stories1.json"
    ); // <--- यहाँ नाम को अपनी सही केसिंग में रखें

    try {
      const fileContent = await fs.readFile(filePath, "utf8");
      const data = JSON.parse(fileContent);
      return data.results;
    } catch (error) {
      console.error("Error reading static file:", error);
      throw new Error(`Failed to read static JSON file: ${error.message}`);
    }
  } else {
    // Keep your existing API fetch logic if not using static data
    if (!API_BASE_URL) {
      throw new Error(
        "API_BASE_URL environment variable is not set for external API calls."
      );
    }
    const dataUrl = `${API_BASE_URL}/api/videos`; // ensure this is correct

    //console.log("DEBUG: Fetching from external API:", dataUrl); // DEBUG लॉग

    const res = await fetch(dataUrl, {
      next: { revalidate: 1800 },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch videos from API: ${res.status} ${res.statusText}. Attempted URL: ${dataUrl}`
      );
    }

    const data = await res.json();
    return data.results;
  }
}

const Home_section6_server = async () => {
  let articles = [];
  let error = null;

  try {
    const allArticles = await getArticles();
    articles = allArticles.slice(0, 3);
  } catch (err) {
    console.error("Error in Home_section6_server:", err);
    if (process.env.NODE_ENV === "development") {
      error = `Failed to load articles: ${err.message}`;
    } else {
      error = "Failed to load articles.";
    }
  }

  return <Home_section6 articles={articles} error={error} />;
};

export default Home_section6_server;

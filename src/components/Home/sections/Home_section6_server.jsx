import React from "react";
import Home_section6 from "./Home_section6";
import { fetchData } from "@/src/Utils/fetchData";

const Home_section6_server = async () => {
  let articles = [];
  let error = null;

  try {
    const allArticles = await fetchData(
      "/data/Fitness-Excericise-Top-Stories1.json", // API endpoint
      "public/data/Fitness-Excericise-Top-Stories1.json" // Static file path
    );

    // Ensure allArticles is an array
    articles = Array.isArray(allArticles.results)
      ? allArticles.results.slice(0, 3)
      : [];
    //console.log("Home_section6_server articles:", articles);
  } catch (err) {
    console.error("Error in Home_section6_server:", err);
    error =
      process.env.NODE_ENV === "development"
        ? `Failed to load articles: ${err.message}`
        : "Failed to load articles.";
  }

  return <Home_section6 articles={articles} error={error} />;
};

export default Home_section6_server;

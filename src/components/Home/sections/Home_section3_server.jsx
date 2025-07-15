import React from "react";
import axios from "axios";
import { ArticlesProvider } from "@/src/context/ArticlesContext";
import Home_section3 from "./Home_section3";

// API base URL to environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Home_section3_server = async () => {
  let allArticles = [];
  let error = null;

  try {
    // Fetch data directly on the server
    const res = await axios.get(
      `${API_BASE_URL}/data/Fitness-excericise-top-stories.json`
    );
    allArticles = res.data.results;
    //onsole.log("Articles data fetched on server.");
  } catch (err) {
    //console.error("Error fetching articles:", err.message);
    error = "Failed to load articles.";
  }

  // Pass the fetched data to the Client-side Context Provider
  return (
    <ArticlesProvider initialArticles={allArticles}>
      <Home_section3 />
    </ArticlesProvider>
  );
};

export default Home_section3_server;

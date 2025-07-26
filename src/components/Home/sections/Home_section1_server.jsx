import React from "react";
import axios from "axios";
import Home_section1 from "./Home_section1";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.VERCEL_URL ||
  "http://localhost:3000";

const Home_section1_server = async () => {
  let cardData = [];
  let error = null;

  try {
    // Fetch data using the determined API_BASE_URL.
    // Ensure the path to the JSON file is correct relative to the public directory.
    const res = await axios.get(`${API_BASE_URL}/data/healthCards.json`);
    cardData = res.data;
    //console.log("Data fetched on server from:", `${API_BASE_URL}/data/healthCards.json`); // Debug comment
  } catch (e) {
    //console.error("Error fetching data:", e);
    // Log the actual error in development for better debugging
    if (process.env.NODE_ENV === "development") {
      console.error(
        "Error fetching data during development from URL:",
        `${API_BASE_URL}/data/healthCards.json`,
        "Error:",
        e
      );
    }
    error = "Failed to load data.";
  }

  return <Home_section1 cardData={cardData} error={error} />;
};

export default Home_section1_server;

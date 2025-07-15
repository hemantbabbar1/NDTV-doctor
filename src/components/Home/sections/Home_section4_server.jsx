import React from "react";
import Home_section4 from "./Home_section4";
import axios from "axios";

// API base URL to environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// This is a Server Component, so it doesn't have "use client"
const Home_section4_server = async () => {
  let allData = [];
  let error = null;

  try {
    // Fetch data directly on the server
    const response = await axios.get(`${API_BASE_URL}/data/live-feed.json`);
    allData = response.data.results;
    //console.log("Live Feed data fetched on server."); // Debug comment
  } catch (e) {
    //console.error("Error fetching live feed data:", e);
    error = "Failed to load data.";
  }

  return (
    // Pass the fetched data and error as props to the Client Component
    <Home_section4 allData={allData} error={error} />
  );
};

export default Home_section4_server;

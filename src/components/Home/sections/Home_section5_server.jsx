import React from "react";
import Home_section5 from "./Home_section5";
import axios from "axios";

// API base URL to environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// This is a Server Component, so it doesn't have "use client"
const Home_section5_server = async () => {
  let allData = [];
  let error = null;

  try {
    // Fetch data directly on the server
    const response = await axios.get(
      `${API_BASE_URL}/data/Health-solutions2.json`
    );
    allData = response.data.results;
    //console.log("Health Solutions data fetched on server."); // Debug comment
  } catch (e) {
    //console.error("Error fetching health solutions data:", e);
    error = "Failed to load data.";
  }

  return (
    // Pass the fetched data and error as props to the Client Component
    <Home_section5 allData={allData} error={error} />
  );
};

export default Home_section5_server;

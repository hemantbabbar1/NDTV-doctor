import React from "react";
import Home_section4 from "./Home_section4";
import { fetchData } from "@/src/Utils/fetchData"; // Import fetchData helper function

const Home_section4_server = async () => {
  let allData = [];
  let error = null;

  try {
    // Use fetchData to fetch data
    const data = await fetchData(
      "/data/live-feed.json", // API endpoint
      "public/data/live-feed.json" // Static file path
    );

    // Ensure data.results is valid
    allData = Array.isArray(data.results) ? data.results : [];
  } catch (e) {
    console.error("Error fetching live feed data in Home_section4_server:", e);
    error = "Failed to load data.";
  }

  return (
    // Pass the fetched data and error as props to the Client Component
    <Home_section4 allData={allData} error={error} />
  );
};

export default Home_section4_server;

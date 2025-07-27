import React from "react";
import Home_section5 from "./Home_section5";
import { fetchData } from "@/src/Utils/fetchData"; // Import fetchData helper function

const Home_section5_server = async () => {
  let allData = [];
  let error = null;

  try {
    // Use fetchData to fetch data
    const data = await fetchData(
      "/data/Health-solutions2.json", // API endpoint
      "public/data/Health-solutions2.json" // Static file path
    );

    // Ensure data.results is valid
    allData = Array.isArray(data.results) ? data.results : [];
  } catch (e) {
    console.error(
      "Error fetching health solutions data in Home_section5_server:",
      e
    );
    error = "Failed to load data.";
  }

  return (
    // Pass the fetched data and error as props to the Client Component
    <Home_section5 allData={allData} error={error} />
  );
};

export default Home_section5_server;

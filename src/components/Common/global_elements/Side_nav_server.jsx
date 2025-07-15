import React from "react";
import Side_nav from "./Side_nav";
import axios from "axios";

// API base URL to environment variable
const API_BASE_URL = process.env.API_BASE_URL;

// This is a Server Component, so it doesn't have "use client"
const Side_nav_server = async () => {
  let allData = [];
  let error = null;
  let loopNav1 = [];
  let loopNav2 = [];
  let loopNav3 = [];

  try {
    // Fetch data directly on the server
    const response = await axios.get(
      `${API_BASE_URL}/data/wapburgurmenueng2020.json`
    );
    allData = response.data;
    // only first 6 result
    if (allData && allData.length > 0) {
      loopNav1 = allData.slice(0, 8);
      loopNav2 = allData.slice(8, 14);
      loopNav3 = allData.slice(14, 28);
    }

    //console.log("Side nav data fetched on server."); // Debug comment
  } catch (e) {
    //console.error("Error fetching live feed data:", e);
    error = "Failed to load data.";
  }

  return (
    // Pass the fetched data and error as props to the Client Component
    <Side_nav
      allData={allData}
      loopNav1={loopNav1}
      loopNav2={loopNav2}
      loopNav3={loopNav3}
      error={error}
    />
  );
};

export default Side_nav_server;

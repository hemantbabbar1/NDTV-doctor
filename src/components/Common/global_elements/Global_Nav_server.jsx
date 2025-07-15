import React from "react";
import Global_Nav from "./Global_Nav";
import axios from "axios";

// API base URL to environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// This is a Server Component, so it doesn't have "use client"
const Global_Nav_server = async () => {
  let allData = [];
  let error = null;

  try {
    // Fetch data directly on the server
    const response = await axios.get(`${API_BASE_URL}/data/global-nav.json`);
    allData = response.data;
  } catch (e) {
    //console.error("Error fetching live feed data:", e);
    error = "Failed to load data.";
  }

  return (
    // Pass the fetched data and error as props to the Client Component
    <Global_Nav allData={allData} error={error} />
  );
};

export default Global_Nav_server;

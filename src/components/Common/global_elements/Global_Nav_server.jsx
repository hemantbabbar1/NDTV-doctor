import React from "react";
import Global_Nav from "./Global_Nav";
import { fetchData } from "@/src/Utils/fetchData";

// API base URL to environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const USE_STATIC_DATA = process.env.NEXT_PUBLIC_USE_STATIC_DATA === "true";

// This is a Server Component, so it doesn't have "use client"
const Global_Nav_server = async () => {
  let allData = [];
  let error = null;

  try {
    allData = await fetchData(
      "/data/global-nav.json", // API endpoint
      "public/data/global-nav.json" // Static file path
    );
  } catch (e) {
    console.error("Error fetching data in Global_Nav_server:", e);
    error = "Failed to load data.";
  }

  return (
    // Pass the fetched data and error as props to the Client Component
    <Global_Nav allData={allData} error={error} />
  );
};

export default Global_Nav_server;

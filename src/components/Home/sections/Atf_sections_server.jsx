"use client";

import React from "react";
import Atf_Sections from "./Atf_sections";
import { fetchData } from "@/src/Utils/fetchData";

const Atf_sections_server = async () => {
  let articles = [];
  let error = null;

  try {
    articles = await fetchData(
      "/data/live-feed.json", // API endpoint
      "public/data/live-feed.json" // Static file path
    );

    // Ensure articles is an array and has valid objects
    articles = Array.isArray(articles.results) ? articles.results : [];
  } catch (e) {
    console.error("Error fetching data in Atf_sections_server:", e);
    error = "Failed to load data.";
  }

  return (
    // Pass the fetched data and error as props to the Client Component
    <Atf_Sections articles={articles} error={error} />
  );
};

export default Atf_sections_server;

import React from "react";
import Atf_Sections from "./Atf_sections";

// API base URL to environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Atf_sections_server = async () => {
  let articles = [];
  let error = null;

  try {
    // Fetch data directly on the server
    const res = await fetch(`${API_BASE_URL}/data/live-feed.json`, {
      next: { revalidate: 600 }, // Revalidate data every 10 minutes
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    articles = data.results;
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

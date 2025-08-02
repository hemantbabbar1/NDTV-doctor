import React from "react";
import Home_section4 from "@/src/components/Home/sections/Home_section4";
import { fetchLiveArticles } from "@/src/Utils/fetchLiveArticles";

const Home_section4_server = async () => {
  let articles = [];
  let error = null;

  try {
    // Fetch data on the server side
    const data = await fetchLiveArticles();
    articles = Array.isArray(data) ? data : [];
  } catch (err) {
    //console.error("Error fetching articles on the server:", err);
    error = "Failed to load articles.";
  }

  // Pass the fetched data and error as props to the Client Component
  return <Home_section4 allData={articles} error={error} />;
};

export default Home_section4_server;

import React from "react";
import { fetchData } from "utils/fetchData";
import Home_section1 from "./Home_section1";

const Home_section1_server = async () => {
  let cardData = [];
  let error = null;

  try {
    cardData = await fetchData(
      "/data/healthCards.json", // API endpoint
      "public/data/healthCards.json" // Static file path
    );
  } catch (e) {
    console.error("Error fetching data in Home_section1_server:", e);
    error = "Failed to load data.";
  }

  return <Home_section1 cardData={cardData} error={error} />;
};

export default Home_section1_server;

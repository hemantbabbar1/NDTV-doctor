import React from "react";
import Home_section4 from "./Home_section4";
import { fetchLiveArticles } from "@/src/Utils/fetchLiveArticles";

const Home_section4_server = async () => {
  //const [articles, setArticles] = useState([]); // Define state for articles
  let allData = [];
  let error = null;

  try {
    // Use fetchLiveArticles to fetch data
    const data = await fetchLiveArticles();

    // Ensure data.results is valid
    allData = Array.isArray(data.results) ? data.results : [];
    //setArticles(data); // Update state
  } catch (e) {
    console.error("Error fetching live feed data in Home_section4_server:", e);
    error = "Failed to load data.4";
  }

  return (
    // Pass the fetched data and error as props to the Client Component
    <Home_section4 allData={allData} error={error} />
  );
};

export default Home_section4_server;

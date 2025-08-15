import React from "react";
import Home_section4 from "@/src/components/Home/sections/Home_section4";
import Home_section4_wap from "@/src/components/Home/homeWap/Home_section4_wap";
import { fetchLiveArticles } from "@/src/Utils/fetchLiveArticles";
import { isMobile } from "@/src/Utils/deviceDetection";
import { headers } from "next/headers";

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

  // Device detection
  const userAgent = headers().get("user-agent") || "";
  const mobile = isMobile(userAgent);

  // Conditional render for WAP
  if (mobile) {
    return <Home_section4_wap allData={articles} error={error} />;
  }

  // Pass the fetched data and error as props to the Client Component
  return <Home_section4 allData={articles} error={error} />;
};

export default Home_section4_server;

import React from "react";
import Atf_Sections from "./Atf_sections";
import Atf_section_wap from "../homeWap/Atf_section_wap";
import { isMobile } from "@/src/Utils/deviceDetection";
import { headers } from "next/headers";
import { fetchLiveArticles } from "@/src/Utils/fetchLiveArticles";

const Atf_sections_server = async () => {
  let articles = [];
  let error = null;

  try {
    articles = await fetchLiveArticles(); // Fetch live articles
    //console.log("API response in Atf_sections_server:", articles);

    // Ensure articles is an array and has valid objects
    articles = Array.isArray(articles) ? articles : [];
  } catch (e) {
    //console.error("Error fetching data in Atf_sections_server:", e);
    error = "Failed to load data.";
  }

  // Device detection
  const userAgent = headers().get("user-agent") || "";
  const mobile = isMobile(userAgent);

  // Conditional render for WAP
  if (mobile) {
    return <Atf_section_wap articles={articles} error={error} />;
  }

  return (
    // Pass the fetched data and error as props to the Client Component
    <Atf_Sections articles={articles} error={error} />
  );
};

export default Atf_sections_server;

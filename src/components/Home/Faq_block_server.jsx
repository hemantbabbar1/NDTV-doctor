// This is a Server Component, so it doesn't have "use client"
import React from "react";
import Faq_block from "./Faq_block";
import { fetchData } from "utils/fetchData";

const Faq_block_server = async () => {
  let faqs = [];
  let error = null;

  try {
    // Fetch data using the centralized fetchData helper function
    const data = await fetchData(
      "/data/faqs.json", // API endpoint
      "public/data/faqs.json" // Static file path);
    );
    faqs = Array.isArray(data) ? data : [];
  } catch (e) {
    error = "Failed to load FAQs.";
  }

  return (
    // Pass the fetched data and error as props to the Client Component
    <Faq_block faqs={faqs} error={error} />
  );
};

export default Faq_block_server;

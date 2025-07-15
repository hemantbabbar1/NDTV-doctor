// This is a Server Component, so it doesn't have "use client"
import React from "react";
import Faq_block from "./Faq_block";
import axios from "axios";

// API base URL to environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Faq_block_server = async () => {
  let faqs = [];
  let error = null;

  try {
    // Fetch data directly on the server
    const res = await axios.get(`${API_BASE_URL}/data/faqs.json`);
    faqs = res.data;
    //console.log("FAQs data fetched on server."); // Debug comment
  } catch (e) {
    //console.error("Error fetching FAQs data:", e);
    error = "Failed to load FAQs.";
  }

  return (
    // Pass the fetched data and error as props to the Client Component
    <Faq_block faqs={faqs} error={error} />
  );
};

export default Faq_block_server;

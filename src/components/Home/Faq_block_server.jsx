// This is a Server Component, so it doesn't have "use client"
import React from "react";
import Faq_block from "./Faq_block";
import axios from "axios";

const Faq_block_server = async () => {
  let faqs = [];
  let error = null;

  try {
    // Fetch data directly on the server
    const res = await axios.get("http://localhost:3000/data/faqs.json");
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

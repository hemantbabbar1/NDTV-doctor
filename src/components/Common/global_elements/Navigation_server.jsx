import React from "react";
import Navigation from "./Navigation";
import axios from "axios"; // axios इंपोर्ट करें

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const USE_STATIC_DATA = process.env.NEXT_PUBLIC_USE_STATIC_DATA === "true";

const Navigation_server = async () => {
  let menuLinks = [];
  let error = null;

  try {
    // let dataUrl; // इस लाइन को कमेंट करें या हटा दें

    // लोकल डीबगिंग के लिए हार्डकोड करें
    const dataUrl = "http://localhost:3000/data/navLinks.json"; // <--- इसे Vercel पर डिप्लॉय न करें!

    console.log("Attempting to fetch from URL:", dataUrl);

    const res = await axios.get(dataUrl);

    menuLinks = res.data;
  } catch (e) {
    console.error("Error fetching data in Navigation_server:", e);
    if (process.env.NODE_ENV === "development") {
      error = `Failed to load navigation links: ${e.message}`;
    } else {
      error = "Failed to load navigation links.";
    }
  }

  return (
    <>
      <Navigation menuLinks={menuLinks} error={error} />
    </>
  );
};
export default Navigation_server;

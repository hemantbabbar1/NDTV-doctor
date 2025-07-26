import React from "react";
import Navigation from "./Navigation";
import axios from "axios"; // axios इंपोर्ट करें

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
//const USE_STATIC_DATA = process.env.NEXT_PUBLIC_USE_STATIC_DATA === "true";

const Navigation_server = async () => {
  let menuLinks = [];
  let error = null;

  try {
    const dataUrl = `${API_BASE_URL}/data/navLinks.json`; // Dynamic URL

    console.log("DEBUG: Fetching from URL:", dataUrl);

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

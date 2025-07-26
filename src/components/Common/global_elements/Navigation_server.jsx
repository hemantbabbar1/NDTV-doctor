import React from "react";
import Navigation from "./Navigation";
import { fetchData } from "utils/fetchData";

const Navigation_server = async () => {
  let menuLinks = [];
  let error = null;

  try {
    menuLinks = await fetchData(
      "/data/navLinks.json", // API endpoint
      "public/data/navLinks.json" // Static file path
    );
  } catch (e) {
    console.error("Error fetching data in Navigation_server:", e);
    error =
      process.env.NODE_ENV === "development"
        ? `Failed to load navigation links: ${e.message}`
        : "Failed to load navigation links.";
  }

  return (
    <>
      <Navigation menuLinks={menuLinks} error={error} />
    </>
  );
};

export default Navigation_server;

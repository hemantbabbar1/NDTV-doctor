import React from "react";
import Navigation from "./Navigation";
import Mobile_Subnav from "./Mobile_Subnav";

// API base URL from environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // या process.env.NEXT_PUBLIC_API_BASE_URL;

const Navigation_server = async () => {
  let menuLinks = [];
  let error = null;

  try {
    // Fetch data directly on the server with revalidation option
    const res = await fetch(`${API_BASE_URL}/data/navLinks.json`, {
      next: { revalidate: 1800 }, // Every 30 min jason will revalidate and relode.
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch navigation data: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();
    menuLinks = data;
  } catch (e) {
    console.error("Error fetching data in Navigation_server:", e);
    //error = `Failed to load navigation links: ${e.message}`;
  }

  return (
    <>
      <Navigation menuLinks={menuLinks} error={error} />
    </>
  );
};

export default Navigation_server;

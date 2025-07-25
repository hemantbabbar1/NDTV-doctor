import React from "react";
import Mobile_Subnav from "./Mobile_Subnav";

// API base URL from environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const Mobile_Subnav_server = async () => {
  let menuLinks = [];
  //let menuMobLinks = [];
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
    //menuMobLinks = data;
  } catch (e) {
    //console.error("Error fetching data in Mobile_Subnav_server:", e);
    //error = `Failed to load navigation links: ${e.message}`;
  }

  return (
    <>
      <Mobile_Subnav menuLinks={menuLinks} error={error} />
    </>
  );
};

export default Mobile_Subnav_server;

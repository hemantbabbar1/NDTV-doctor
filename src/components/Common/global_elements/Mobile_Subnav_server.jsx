import React from "react";
import Mobile_Subnav from "./Mobile_Subnav";
import { fetchData } from "utils/fetchData";

const Mobile_Subnav_server = async () => {
  let menuLinks = [];
  let error = null;

  try {
    menuLinks = await fetchData(
      "/data/navLinks.json", // API endpoint
      "public/data/navLinks.json" // Static file path
    );
  } catch (e) {
    console.error("Error fetching data in Mobile_Subnav_server:", e);
    error = `Failed to load navigation links: ${e.message}`;
  }

  return (
    <>
      <Mobile_Subnav menuLinks={menuLinks} error={error} />
    </>
  );
};

export default Mobile_Subnav_server;

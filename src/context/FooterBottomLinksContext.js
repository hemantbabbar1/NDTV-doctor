"use client";
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

// Create a context for footer links
// This context will provide the footer links to the components that need them

const FooterBottomLinksContext = createContext();

export const FooterLinksProvider = ({ children }) => {
  const [links, setLinks] = useState([]);

  // useEffect(() => {
  //   const fetchLinks = async () => {
  //     try {
  //       // Fetch data using the centralized fetchData helper function
  //       const data = await fetchData(
  //         "/data/navLinks.json", // API endpoint
  //         "public/data/navLinks.json" // Static file path
  //       );
  //       setLinks(data);
  //     } catch (err) {
  //       console.error("Failed to fetch footer links:", err);
  //     }
  //   };
  //   fetchLinks();
  // }, []);

  return (
    <FooterBottomLinksContext.Provider value={{ links }}>
      {children}
    </FooterBottomLinksContext.Provider>
  );
};

// Export the custom hook to use the FooterBottomLinksContext
export const useFooterLinks = () => useContext(FooterBottomLinksContext);

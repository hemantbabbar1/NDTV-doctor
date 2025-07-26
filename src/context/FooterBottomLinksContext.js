"use client";
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";

// Create a context for footer links
// This context will provide the footer links to the components that need them

const FooterBottomLinksContext = createContext();

export const FooterLinksProvider = ({ children }) => {
  const [links, setLinks] = useState([]);

  const baseURL =
    process.env.NODE_ENV === "production"
      ? "https://ndtv-doctor-a74djls43-hemantbabbar1s-projects.vercel.app"
      : "http://localhost:3000";

  // useEffect(() => {
  //   const fetchLinks = async () => {
  //     try {
  //       const res = await fetch(`${baseURL}/data/navLinks.json`);
  //       const data = await res.json();
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

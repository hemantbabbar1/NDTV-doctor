"use client";
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
// Removed: import axios from "axios"; // Axios ab zarurat nahi hai

// Context create karo
const FooterLinksContext = createContext(undefined);

// Provider component
export const FooterLinksProvider = ({ children }) => {
  // Main footer links (pehli API)
  const [mainLinks, setMainLinks] = useState([]);
  // Extra/footer ke selected area ke links (dusri API)
  const [extraLinks, setExtraLinks] = useState([]);
  // Loading & error state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API base URL to environment variable
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    // Async function for both APIs
    const fetchFooterLinks = async () => {
      setLoading(true);
      setError(null);
      try {
        // Debugging: Check API_BASE_URL (as discussed previously)
        console.log("API_BASE_URL in FooterLinksProvider:", API_BASE_URL);

        // Main footer links - using fetch
        const url1 = `${API_BASE_URL}/data/Footer2016Bottom.json`;
        console.log("Fetching URL 1 (Fetch API):", url1); // Debugging

        const response1 = await fetch(url1);
        if (!response1.ok) {
          // Check for HTTP errors (e.g., 404, 500)
          throw new Error(
            `HTTP error! status: ${response1.status} for ${url1}`
          );
        }
        const data1 = await response1.json();
        setMainLinks(data1);
        console.log("Footer2016Bottom.json data (Fetch API):", data1); // Debugging

        // Extra/footer ke selected area ke links - using fetch
        const url2 = `${API_BASE_URL}/data/footernewhp_hp2023_footer.json`;
        console.log("Fetching URL 2 (Fetch API):", url2); // Debugging

        const response2 = await fetch(url2);
        if (!response2.ok) {
          // Check for HTTP errors
          throw new Error(
            `HTTP error! status: ${response2.status} for ${url2}`
          );
        }
        const data2 = await response2.json();
        setExtraLinks(data2);
        console.log("footernewhp_hp2023_footer.json data (Fetch API):", data2); // Debugging
      } catch (err) {
        console.error("Error fetching footer links with Fetch API:", err); // Debugging: Log actual error
        setError("Failed to fetch footer links: " + err.message); // err.message ko bhi include karein
      } finally {
        setLoading(false);
      }
    };
    fetchFooterLinks();
  }, [API_BASE_URL]); // API_BASE_URL ko dependency array me rakhna better practice hai

  // Context value me dono data, loading, error
  return (
    <FooterLinksContext.Provider
      value={{ mainLinks, extraLinks, loading, error }}
    >
      {children}
    </FooterLinksContext.Provider>
  );
};

// Custom hook
export const useFooterLinks = () => {
  const context = useContext(FooterLinksContext);
  if (context === undefined) {
    throw new Error("useFooterLinks must be used within a FooterLinksProvider");
  }
  return context;
};

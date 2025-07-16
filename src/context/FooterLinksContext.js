"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const FooterLinksContext = createContext(undefined);

// Provider component now receives initial data via props
export const FooterLinksProvider = ({
  children,
  initialMainLinks = [],
  initialExtraLinks = [],
  initialError = null,
}) => {
  // Initialize state with the server-fetched initial data
  const [mainLinks, setMainLinks] = useState(initialMainLinks);
  const [extraLinks, setExtraLinks] = useState(initialExtraLinks);

  const [loading, setLoading] = useState(false); // Set to false as data is already fetched
  const [error, setError] = useState(initialError);

  // API_BASE_URL is not needed here anymore for initial fetch
  // const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  // Remove the useEffect that fetches data on the client-side
  // as the initial data is provided via props from the server.
  /*
  useEffect(() => {
    const fetchFooterLinks = async () => {
      setLoading(true);
      setError(null);
      try {
        const url1 = `${API_BASE_URL}/data/Footer2016Bottom.json`;
        const response1 = await fetch(url1);
        if (!response1.ok) {
          throw new Error(`HTTP error! status: ${response1.status} for ${url1}`);
        }
        const data1 = await response1.json();
        setMainLinks(data1);

        const url2 = `${API_BASE_URL}/data/footernewhp_hp2023_footer.json`;
        const response2 = await fetch(url2);
        if (!response2.ok) {
          throw new Error(`HTTP error! status: ${response2.status} for ${url2}`);
        }
        const data2 = await response2.json();
        setExtraLinks(data2);
      } catch (err) {
        console.error("Error fetching footer links with Fetch API:", err);
        setError("Failed to fetch footer links: " + err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFooterLinks();
  }, [API_BASE_URL]); // dependency array can be removed if no client-side fetch
  */

  // Context value now includes loading state (if you keep it)
  return (
    <FooterLinksContext.Provider
      value={{
        mainLinks,
        extraLinks,
        loading,
        error,
        setMainLinks,
        setExtraLinks,
        setLoading,
        setError,
      }}
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

"use client";
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

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

  useEffect(() => {
    // Async function for both APIs
    const fetchFooterLinks = async () => {
      setLoading(true);
      setError(null);
      try {
        // Main footer links
        const res1 = await axios.get(
          "https://edata.ndtv.com/feeds/hp/Footer2016Bottom.json"
        );
        setMainLinks(res1.data);

        // Extra/footer ke selected area ke links
        const res2 = await axios.get(
          "https://edata.ndtv.com/feeds/hp/footernewhp_hp2023_footer.json"
        );
        setExtraLinks(res2.data);
      } catch (err) {
        setError("Failed to fetch footer links");
      } finally {
        setLoading(false);
      }
    };
    fetchFooterLinks();
  }, []);

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

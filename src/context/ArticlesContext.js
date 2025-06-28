"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ArticlesContext = createContext(undefined);

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch articles from the API
    const fetchApi = async () => {
      try {
        const response = await axios.get("/data/live-feed.json");
        setArticles(response.data.results); // Only set the array, not the whole object
        //console.log("Fetched articles:", response.data.results);
      } catch (e) {
        //console.error("Error fetching articles:", e);
        setError("Failed to load articles.");
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles, loading, error }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  if (context === undefined) {
    throw new Error("useArticles must be used within an ArticlesProvider");
  }
  return context;
};

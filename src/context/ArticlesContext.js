"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ArticlesContext = createContext();

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch articles from the API
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          "https://search.ndtv.com/news/json/client_key/ndtv-news-c5d815c6459df03ef7c65742d96498cd/?blog_id=36&pagesize=100&extra_params=short_headline,category,other_settings_node&categories=health"
        );
        setArticles(response.data);
        console.log("Fetched articles:", response.data);
      } catch (e) {
        console.error("Error fetching articles:", e);
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

export const useArticles = () => useContext(ArticlesContext);

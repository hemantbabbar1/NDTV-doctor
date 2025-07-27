"use client";

import React, { createContext, useContext, useState } from "react";

const ArticlesContext = createContext(undefined);

export const ArticlesProvider = ({
  children,
  initialArticles = [],
  initialError = null,
}) => {
  const [articles, setArticles] = useState(initialArticles);
  const [error, setError] = useState(initialError);

  return (
    <ArticlesContext.Provider
      value={{ articles, setArticles, error, setError }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  console.log("useArticles context:", context); // Debugging log
  if (context === undefined) {
    throw new Error("useArticles must be used within an ArticlesProvider");
  }
  return context;
};

/**
 * Custom Hook for Paginated Listing with Tabs and Fade-in Animation
 * Reusable logic for Videos, Webstories, and other listing components
 */
"use client";

import { useState, useEffect, useRef, useMemo } from "react";

export const usePaginatedListing = (items = [], itemsPerPage = 9) => {
  // State management
  const [visibleCounts, setVisibleCounts] = useState({});
  const [loading, setLoading] = useState(false);
  const [fadeInRange, setFadeInRange] = useState([0, itemsPerPage]);
  const timeoutRef = useRef();

  // Get unique categories from items
  const uniqueCategories = useMemo(() => {
    const categoryKey = items[0]?.categories ? "categories" : "category";
    return [
      "all", // Always include "all" as first category
      ...new Set(
        items.map(
          (item) => item[categoryKey]?.trim().toLowerCase() || "uncategorized"
        )
      ),
    ];
  }, [items]);

  // Initialize visible counts for each category
  useEffect(() => {
    const initialCounts = {};
    uniqueCategories.forEach((category) => {
      initialCounts[category] = itemsPerPage;
    });
    setVisibleCounts(initialCounts);

    // Set initial fade-in for first load
    setFadeInRange([0, itemsPerPage]);
  }, [uniqueCategories, itemsPerPage]);

  // Handle loading more items for a specific category
  const handleLoadMore = (e, category) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setVisibleCounts((prevCounts) => {
        const prevCount = prevCounts[category];
        const newCount = prevCount + itemsPerPage;
        setFadeInRange([prevCount, newCount]); // Set fade-in range for new items
        return {
          ...prevCounts,
          [category]: newCount,
        };
      });
      setLoading(false);
    }, 150);
  };

  // Remove fade-in class after animation
  useEffect(() => {
    if (fadeInRange[0] !== fadeInRange[1]) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setFadeInRange([0, 0]), 1000);
      return () => clearTimeout(timeoutRef.current);
    }
  }, [fadeInRange]);

  // Filter items by category
  const getFilteredItems = (category, categoryKey = "categories") => {
    return items.filter((item) =>
      category === "all"
        ? true
        : item[categoryKey]?.trim().toLowerCase() ===
          category.trim().toLowerCase()
    );
  };

  // Check if item should have fade-in animation
  const shouldFadeIn = (index) => {
    return index >= fadeInRange[0] && index < fadeInRange[1];
  };

  // Check if there are more items to load for a category
  const hasMoreItems = (category, categoryKey = "categories") => {
    const filteredItems = getFilteredItems(category, categoryKey);
    return filteredItems.length > visibleCounts[category];
  };

  return {
    // State
    visibleCounts,
    loading,
    fadeInRange,
    uniqueCategories,

    // Functions
    handleLoadMore,
    getFilteredItems,
    shouldFadeIn,
    hasMoreItems,

    // Ref
    timeoutRef,
  };
};

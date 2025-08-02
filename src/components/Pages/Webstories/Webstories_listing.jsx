"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";

import "../../../Styles/css/grid/listing-grid/listing-grid.css";
import "../../../Styles/css/webstories/webstories.css";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Import default styles
import "../../../Styles/css/elements/custom-react-tabs.css"; // Import custom styles
import "../../../Styles/css/widgets/catgory-tab-widget.css"; // Import custom styles

import Webstories_card from "../../Common/gallery/Webstories_card";
import LoadMoreButton from "../../Common/LoadMoreButton";

const Webstories_listing = ({ webstories }) => {
  // State to manage visible news count for each category
  const [visibleCounts, setVisibleCounts] = useState({});
  const [loading, setLoading] = useState(false);
  const [fadeInRange, setFadeInRange] = useState([0, 8]);
  const timeoutRef = useRef(); // Initialize timeoutRef

  // Memoize unique categories to avoid unnecessary re-renders
  const uniqueCategories = useMemo(() => {
    return [
      "ALL", // Add "ALL" as the first category
      ...new Set(
        webstories.map((story) => story.categories.trim().toLowerCase())
      ),
    ];
  }, [webstories]);

  // Initialize visibleCounts for each category
  useEffect(() => {
    const initialCounts = {};
    uniqueCategories.forEach((category) => {
      initialCounts[category] = 9; // Default visible count
    });
    setVisibleCounts(initialCounts);
  }, [uniqueCategories]);

  // Handle loading more news for a specific category
  const handleMoreNews = (e, category) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setVisibleCounts((prevCounts) => ({
        ...prevCounts,
        [category]: prevCounts[category] + 9, // Increase visible count by 9
      }));
      setLoading(false);
    }, 150);
  };

  // Remove fade-in class after a delay
  useEffect(() => {
    if (fadeInRange[0] !== fadeInRange[1]) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setFadeInRange([0, 0]), 1000);
      return () => clearTimeout(timeoutRef.current);
    }
  }, [fadeInRange]);

  return (
    <>
      <Tabs>
        <div className="DcCatTb_wr">
          <div className="DcCatTb_tp">
            {/* Render unique categories in TabList */}
            <TabList className="DcCatTb_ul">
              {uniqueCategories.map((category, index) => (
                <Tab
                  key={index}
                  className="DcCatTb_li"
                  selectedClassName="DcCatTb_lk-act"
                >
                  <div className="DcCatTb_lk">{category}</div>
                </Tab>
              ))}
            </TabList>
          </div>
          <div className="DcCatTb_bt">
            {/* Render TabPanel for each unique category */}
            {uniqueCategories.map((category, index) => (
              <TabPanel key={index} className="custom-tab-panel">
                <div className="LsGrdLyt_ul LsGrdLyt_ul-3">
                  {webstories
                    .filter((story) =>
                      category === "ALL"
                        ? true // Show all stories for "ALL"
                        : story.categories.trim().toLowerCase() ===
                          category.trim().toLowerCase()
                    )
                    .slice(0, visibleCounts[category]) // Show only visibleCount stories
                    .map((filteredStory, storyIndex) => (
                      <div className="LsGrdLyt_li" key={storyIndex}>
                        <Webstories_card webstory={filteredStory} />
                      </div>
                    ))}
                </div>

                {/* Show LoadMoreButton only if there are more items to load */}
                {webstories.filter((story) =>
                  category === "ALL"
                    ? true // Show all stories for "ALL"
                    : story.categories.trim().toLowerCase() ===
                      category.trim().toLowerCase()
                ).length > visibleCounts[category] && (
                  <LoadMoreButton
                    onClick={(e) => handleMoreNews(e, category)}
                    loading={loading}
                    label={`More ${category} Stories`}
                  />
                )}
              </TabPanel>
            ))}
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default Webstories_listing;

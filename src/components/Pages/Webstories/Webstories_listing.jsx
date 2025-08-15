"use client";

/**
 * Refactored Webstories Listing Component
 * Using the new TabbedListing component
 */
import React from "react";
import TabbedListing from "../../Common/TabbedListing";
import Webstories_card from "../../Common/gallery/Webstories_card";

const Webstories_listing = ({ webstories }) => {
  // Render function for individual webstory item
  const renderWebstoryItem = (webstory) => {
    return <Webstories_card webstory={webstory} />;
  };

  return (
    <TabbedListing
      items={webstories}
      renderItem={renderWebstoryItem}
      itemsPerPage={9}
      categoryKey="categories"
      loadMoreLabel="More Stories"
    />
  );
};

export default Webstories_listing;

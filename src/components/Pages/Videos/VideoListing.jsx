"use client";
/**
 * Video Listing Component (Refactored)
 * Using the new TabbedListing component for cleaner code
 */
import React from "react";
import TabbedListing from "../../Common/TabbedListing";
import VideoCard from "../../Common/gallery/VideoCard";

const VideoListing = ({ videos }) => {
  // Render function for individual video item
  const renderVideoItem = (video) => {
    return <VideoCard videos={video} />;
  };

  return (
    <TabbedListing
      items={videos}
      renderItem={renderVideoItem}
      itemsPerPage={9}
      categoryKey="categories"
      loadMoreLabel="More Videos"
    />
  );
};

export default VideoListing;

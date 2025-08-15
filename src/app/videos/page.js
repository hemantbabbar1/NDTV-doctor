import React from "react";
import fetchVideos from "@/src/Utils/fetchVideos";
import Pagetitle2 from "@/src/components/Common/Pagetitle2";
import VideoListing from "@/src/components/Pages/Videos/VideoListing";
//import Video from "@/src/components/Pages/Webstories/Videos/Video";

// Page component for displaying videos
const Page = async () => {
  let videos = [];

  try {
    console.log("Fetching videos on page load...");
    videos = await fetchVideos();
    console.log("Videos fetched successfully:", videos?.length || 0);
  } catch (err) {
    console.error("Error fetching videos:", err);
  }

  return (
    <>
      <Pagetitle2 title="Videos" />
      <VideoListing videos={videos} />
    </>
  );
};

export default Page;

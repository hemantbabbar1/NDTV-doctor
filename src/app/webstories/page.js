import React from "react";
import { fetchData } from "@/src/Utils/fetchData";
import Webstories_listing from "@/src/components/Pages/Webstories/Webstories_listing";
import Pagetitle2 from "@/src/components/Common/Pagetitle2";

// Page component for displaying web stories
const Page = async () => {
  let webstories = [];

  try {
    const data = await fetchData(
      "/data/webstories.json", // API endpoint
      "public/data/webstories.json" // Static file path
    );
    webstories = data.results;
  } catch (err) {
    console.error("Error fetching web stories:", err);
  }

  return (
    <>
      <Pagetitle2 title="Web Stories" />

      {/* Render the Webstories_listing component with fetched data */}
      <Webstories_listing webstories={webstories} />
    </>
  );
};

export default Page;

import React from "react";
import { fetchData } from "../../../src/Utils/fetchData";

// Importing components
import News_listing_Client from "@/src/components/Common/Listing/News_listing_Client";
import Pagetitle2 from "@/src/components/Common/Pagetitle2";

// Page component for listing
const page = async () => {
  let listingnews = [];
  let error = false;

  try {
    // Fetch data using the centralized fetchData helper function
    const data = await fetchData(
      "/data/listing/list-page.json", // API endpoint
      "public/data/listing/list-page.json" // Static file path
    );
    listingnews = data.item || [];
  } catch (e) {
    error = true;
  }

  return (
    <>
      <div className="LstPg_cnt">
        {/* Page title */}
        <Pagetitle2 title="Listing" />

        {/* Error if Data is not coming through API */}
        {error ? (
          <div className="err">
            Failed to fetch news. Please try again later.
          </div>
        ) : (
          // Rendering the News listing component
          <News_listing_Client listingnews={listingnews} />
        )}
      </div>
    </>
  );
};

export default page;

import React from "react";
import axios from "axios";

// Importing components
import News_listing_Client from "@/src/components/Common/Listing/News_listing_Client";
import PageTitle2 from "@/src/components/Common/PageTitle2";

// API base URL to environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Example axios function with error flag
async function getlistingNews() {
  try {
    const res = await axios.get(`${API_BASE_URL}/data/listing/list-page.json`, {
      headers: { "Cache-Control": "no-store" },
    });
    return {
      listingnews: res.data.item,
      error: false,
    };
  } catch (error) {
    return { listingnews: [], error: true };
  }
}

// Page component for listing
const page = async () => {
  const { listingnews, error } = await getlistingNews();
  return (
    <>
      <div className="LstPg_cnt">
        {/* Page title */}
        <PageTitle2 title="Listing" />

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

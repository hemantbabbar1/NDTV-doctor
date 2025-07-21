import React from "react";

// Import stylesheets for styling the news listing page
// import "../../styles/css/elements/news-listing.css";
// import "../../styles/css/widgets/title-widget-2.css";
// import "../../styles/css/cards/doctor-cards-content.css";
// import "../../styles/css/helper.css";

import "../../styles/css/widgets/seo-text-bottom.css";

// Import necessary components
import Seo_widget from "@/src/components/Common/Seo_widget"; // SEO widget at the bottom of the page
import News_listing_Client from "@/src/components/Common/Listing/News_listing_Client"; // Client component to render the news list
import PageTItle2 from "@/src/components/Common/PageTItle2"; // Component for displaying the page title

// API base URL from environment variables for secure and configurable API access
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * Fetches news data for a specific category from the API.
 * This function runs on the server.
 * @param {string} categorySlug - The slug of the category to fetch news for (e.g., "india-news").
 * @returns {Promise<{listingnews: Array, categoryTitle: string, error: boolean, errorMessage?: string}>}
 */
async function getCategoryNews(categorySlug) {
  // Initialize category title from slug, replacing hyphens with spaces
  let categoryTitle = categorySlug.replace(/-/g, " ");
  // Variable to store the raw response body as text, useful for debugging parsing errors
  let responseText = "";

  try {
    // Fetch data from the API.
    // This assumes the API returns a JSON file containing articles for all categories.
    // For better performance, ideally, the API should offer an endpoint like `/data/category_slug.json`
    const response = await fetch(
      `${API_BASE_URL}/data/listing/list-page.json`,
      {
        cache: "no-store", // Ensures the data is always fetched fresh and not from cache
      }
    );

    // Read the response body as text first.
    // This is crucial to avoid "Body has already been read" error if JSON parsing fails later.
    responseText = await response.text();

    // Check if the HTTP response status is not OK (i.e., not in the 200-299 range)
    if (!response.ok) {
      console.error(
        `HTTP Error for ${categorySlug}: Status ${response.status}, Response: ${responseText}`
      );
      // Throw an error with a specific message indicating the HTTP status problem
      throw new Error(
        `Failed to fetch news. Server responded with status ${response.status}.`
      );
    }

    // Attempt to parse the response text as JSON
    let apiData;
    try {
      apiData = JSON.parse(responseText); // Parse the text content into a JSON object
    } catch (jsonError) {
      // If JSON parsing fails, it means the content was not valid JSON (e.g., HTML error page)
      console.error(`JSON Parsing Error for ${categorySlug}:`, jsonError);
      console.error(
        `Received content (first 500 chars):`,
        responseText.substring(0, 500)
      );
      // Throw an error indicating that valid JSON was not received
      throw new Error("Received invalid data from API. Expected JSON.");
    }

    let filteredNews = [];
    // Check if apiData and apiData.item exist and if 'item' is an array
    if (apiData && Array.isArray(apiData.item)) {
      // Filter the news items based on the current category slug
      // This is necessary because list-page.json is assumed to contain all categories
      filteredNews = apiData.item.filter(
        (item) => item.category_slug === categorySlug
      );
    } else {
      console.warn("API response 'item' is not an array or is missing.");
      // Throw an error if the expected API response format is not met
      throw new Error("API response format unexpected.");
    }

    // Attempt to parse metadata for category title if available
    if (apiData.metadata) {
      try {
        // Metadata is a stringified JSON, so it needs to be parsed
        const metadata = JSON.parse(apiData.metadata);
        if (metadata.category_title) {
          categoryTitle = metadata.category_title; // Update category title from API
        }
      } catch (parseError) {
        console.warn("Could not parse metadata:", parseError);
      }
    }

    // Return the filtered news, the determined category title, and no error status
    return {
      listingnews: filteredNews,
      categoryTitle: categoryTitle,
      error: false,
    };
  } catch (err) {
    // Catch any errors that occur during the fetch or parsing process
    console.error("Error in getCategoryNews:", err.message);
    // Log a snippet of the response text during error for debugging
    console.error(
      "Full response text during error (first 500 chars):",
      responseText.substring(0, 500) + "..."
    );
    // Return an empty news array, the category title, and an error status with message
    return {
      listingnews: [],
      categoryTitle: categoryTitle, // Ensure title is still passed even on error
      error: true,
      errorMessage: err.message, // Pass the specific error message to the component
    };
  }
}

/**
 * React Server Component for displaying a category-specific news listing page.
 * It fetches data on the server and passes it to client components.
 * @param {object} props - Component props.
 * @param {object} props.params - Dynamic route parameters, containing categorySlug.
 */
const CategoryListingPage = async ({ params }) => {
  const { categorySlug } = params; // Extract the dynamic categorySlug from URL parameters

  // Fetch news data using the server-side function
  const { listingnews, categoryTitle, error, errorMessage } =
    await getCategoryNews(categorySlug);

  return (
    <>
      <div className="LstPg_cnt">
        {/* Display the page title dynamically based on the category */}
        <PageTItle2 title={categoryTitle} />

        {/* Conditional rendering based on whether an error occurred during data fetching */}
        {error ? (
          <div className="err">
            Failed to fetch news for {categoryTitle}.
            {errorMessage || "Please try again later."}
          </div>
        ) : (
          // Render the client-side news listing component, passing the filtered news data
          <News_listing_Client listingnews={listingnews} />
        )}

        {/* Render the SEO widget at the bottom of the page */}
        <Seo_widget />
      </div>
    </>
  );
};

export default CategoryListingPage;

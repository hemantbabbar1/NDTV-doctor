import React from "react";
import { fetchData } from "@/src/Utils/fetchData";
import { notFound } from "next/navigation";
//import { headers } from "next/headers";

// Import components for category listing page
import News_listing_Client from "@/src/components/Pages/Listing/News_listing_Client";
import Pagetitle2 from "@/src/components/Common/Pagetitle2.jsx";

// Define API endpoints for each category
const CATEGORY_APIS = {
  "living-healthy": "/data/listing/list-page.json",
  //faq: "/data/faqs.json", // FAQ support added
  // cancer: "/api/cancer-articles",
  // Add more categories here as needed
};

const CategoryListingPage = async ({ params }) => {
  // Get category name from URL params
  const { category } = await params;

  // Convert category slug to readable display name
  // Example: "living-healthy" -> "Living Healthy"
  const categoryName = category
    .replace(/-/g, " ") // Replace dashes with spaces
    .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize first letter of each word

  // Store news articles
  let listingnews = [];

  try {
    // Get specific API endpoint for current category
    const categoryAPI = CATEGORY_APIS[category];

    // Check if API endpoint exists for this category
    if (!categoryAPI) {
      console.log(`Category '${category}' not configured, redirecting to 404`);
      return notFound(); // Return the notFound call
    }

    // Fetch data from API with fallback to static file
    const data = await fetchData(
      categoryAPI, // Primary API endpoint
      `public/data/listing/${category}.json` // Fallback static file if API fails
    );

    // Handle different data structures based on category
    if (category === "faq") {
      // FAQ data is direct array of Q&A objects
      listingnews = Array.isArray(data) ? data : [];
    } else {
      // Regular article structure
      listingnews = data.item || data || [];
    }

    console.log(
      `${categoryName} data loaded:`,
      listingnews.length,
      category === "faq" ? "FAQs" : "articles"
    );
  } catch (e) {
    console.error(`Category ${category} fetch error:`, e);
    console.log(`Unable to load ${category} data, redirecting to 404`);
    return notFound(); // Return the notFound call
  }

  return (
    <div className="LstPg_cnt">
      {/* Main page title */}
      <Pagetitle2 title={categoryName} />

      {/* Show news listing */}
      <News_listing_Client listingnews={listingnews} />
    </div>
  );
};

// Generate SEO metadata for the page
export async function generateMetadata({ params }) {
  // Get category from URL params
  const { category } = await params;

  // Convert category slug to readable format
  const categoryName = category
    .replace(/-/g, " ") // Replace dashes with spaces
    .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize first letter of each word

  // Return SEO metadata for the page
  return {
    title: `${categoryName} - NDTV Doctor`,
    description: `Read the latest ${categoryName} health news and articles on NDTV Doctor`,
    keywords: `${category}, health, medical, ndtv doctor, ${categoryName}`,
    openGraph: {
      title: `${categoryName} - NDTV Doctor`,
      description: `Latest ${categoryName} health articles and news`,
    },
  };
}

export default CategoryListingPage;

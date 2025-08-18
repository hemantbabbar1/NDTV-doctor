import React from "react";
import { fetchData } from "@/src/Utils/fetchData";
import Pagetitle2 from "@/src/components/Common/Pagetitle2.jsx";
import FAQ_listing from "@/src/components/Pages/FAQ/FAQ_listing";

// FAQ Page Component
const FAQPage = async () => {
  let faqData = [];
  let error = false;

  try {
    console.log("Fetching FAQ data...");

    // Fetch FAQ data from dedicated API
    const data = await fetchData(
      "/data/faqs.json", // Primary API endpoint
      "public/data/faqs.json" // Fallback static file
    );

    // FAQ data is direct array
    faqData = Array.isArray(data) ? data : [];

    console.log("FAQ data loaded:", faqData.length, "FAQs");
  } catch (e) {
    console.error("FAQ fetch error:", e);
    error = true;
  }

  return (
    <div className="LstPg_cnt">
      {/* FAQ Page Title */}
      <Pagetitle2 title="Frequently Asked Questions" />

      {/* Show error message if FAQ data fetch failed */}
      {error ? (
        <div className="err">
          Failed to fetch FAQ data. Please try again later.
        </div>
      ) : (
        // Show FAQ listing with custom design
        <FAQ_listing faqData={faqData} />
      )}
    </div>
  );
};

// Generate SEO metadata for FAQ page
export async function generateMetadata() {
  return {
    title: "FAQ - NDTV Doctor",
    description:
      "Frequently asked questions about health, medicine and medical advice on NDTV Doctor",
    keywords:
      "faq, health questions, medical questions, ndtv doctor, health advice",
    openGraph: {
      title: "FAQ - NDTV Doctor",
      description:
        "Get answers to frequently asked health and medical questions",
    },
  };
}

export default FAQPage;

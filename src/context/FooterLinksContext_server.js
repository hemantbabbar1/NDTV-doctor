import React from "react";
// Import the client-side Context Provider
import { FooterLinksProvider } from "./FooterLinksContext"; // Ensure this path is correct
import { fetchData } from "utils/fetchData";

// API base URL from environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// This function will fetch footer links data on the server.
async function getFooterLinksData() {
  let mainLinks = [];
  let extraLinks = [];
  let error = null;

  try {
    // Fetch Main footer links using fetchData helper function
    const mainLinksData = await fetchData(
      "/data/Footer2016Bottom.json", // API endpoint
      "public/data/Footer2016Bottom.json" // Static file path
    );
    mainLinks = mainLinksData;

    // Fetch Extra/footer ke selected area ke links using fetchData helper function
    const extraLinksData = await fetchData(
      "/data/footernewhp_hp2023_footer.json", // API endpoint
      "public/data/footernewhp_hp2023_footer.json" // Static file path
    );
    extraLinks = extraLinksData;
  } catch (e) {
    console.error("Error fetching footer links data (server-side):", e);
    error = `Failed to load footer links: ${e.message}`;
    // Return empty arrays on error to prevent crashes
    mainLinks = [];
    extraLinks = [];
  }

  return { mainLinks, extraLinks, error };
}

// This Server Component fetches the data and passes it to the Client Provider
const FooterLinksContext_server = async ({ children }) => {
  const { mainLinks, extraLinks, error } = await getFooterLinksData();

  return (
    // FooterLinksProvider is a Client Component.
    // It will be initialized with the server-fetched data.
    <FooterLinksProvider
      initialMainLinks={mainLinks}
      initialExtraLinks={extraLinks}
      initialError={error}
    >
      {children}
    </FooterLinksProvider>
  );
};

export default FooterLinksContext_server;
